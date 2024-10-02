const autoBind = require("auto-bind");
const CategoryModel = require("../models/category.model");
const { default: mongoose } = require("mongoose");

class CategoriesService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = CategoryModel;
    }

    async getAllCategories() {
        const category = await this.#model.find({ parent: null }, { __v: 0 });
        return category;
    };

    async getCategoryById(id) {
        const category = await this.#model.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "_id",
                    foreignField: "parent",
                    as: "children"
                }
            },
            {
                $project: {
                    __v: 0,
                    "children.__v": 0,
                    "children.parent": 0
                }
            }
        ]);

        return category;
    };

    async createCategory({ name, parent }) {        
        const category = await this.#model.create({ name, parent });
        if (!category) throw new createHttpError.NotFound("دسته بندی ایجاد نشد");
    };


    async updateCategory({ id, name }) {
        await this.checkExistCategory(id);
        const resultUpdate = await this.#model.updateOne({ _id: id }, { $set: { name } });
        if (!resultUpdate.modifiedCount) throw new createHttpError("بروزرسانی انجام نشد");
    };

    async deleteCategory() {

    }

    async getParentsCategories() {

    };

    async getChildCategories() {

    };

    async checkExistCategory(id) {
        const category = await this.#model.findById(id);
        if (!category) throw new createHttpError.NotFound("دسته بندی یافت نشد");
        return category;
    }
};

module.exports = new CategoriesService();
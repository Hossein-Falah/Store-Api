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
        if (!category) throw new Error("دسته بندی ایجاد نشد");
    };

    async updateCategory() {

    };

    async deleteCategory() {

    }

    async getParentsCategories() {

    };

    async getChildCategories() {

    };
};

module.exports = new CategoriesService();
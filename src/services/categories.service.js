const autoBind = require("auto-bind");
const CategoryModel = require("../models/category.model");

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

    async getCategoryById() {
        
    };

    async createCategory() {

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
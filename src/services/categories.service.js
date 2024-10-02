const autoBind = require("auto-bind");
const CategoryModel = require("../models/category.model");

class CategoriesService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = CategoryModel;
    }

    async getAllCategories() {

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
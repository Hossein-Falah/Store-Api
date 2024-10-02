const autoBind = require("auto-bind");
const CategoriesService = require("../services/categories.service");

class CategoriesController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = CategoriesService
    };

    async getAllCategories(req, res, next) {

    };

    async getCategoryById(req, res, next) {
        
    };

    async createCategory(req, res, next) {

    };

    async updateCategory(req, res, next) {

    };

    async deleteCategory(req, res, next) {

    }

    async getParentsCategories(req, res, next) {

    };

    async getChildCategories(req, res, next) {

    };
};

module.exports = new CategoriesController();
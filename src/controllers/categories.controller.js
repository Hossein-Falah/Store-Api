const autoBind = require("auto-bind");
const CategoriesService = require("../services/categories.service");
const { StatusCodes } = require("http-status-codes");

class CategoriesController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = CategoriesService
    };

    async getAllCategories(req, res, next) {
        const categories = await this.#service.getAllCategories();

        return res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            categories
        })
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
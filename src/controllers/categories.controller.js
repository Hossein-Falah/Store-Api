const autoBind = require("auto-bind");
const CategoriesService = require("../services/categories.service");
const { StatusCodes } = require("http-status-codes");
const { addCategoryValidation, updateCategoryValidation } = require("../validations/categories.validation");
const { objectIdValidation } = require("../validations/id.validation");

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
        const { id } = req.params;
        await objectIdValidation.validateAsync({ id });

        const category = await this.#service.getCategoryById(id);

        return res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            category
        })
    };

    async createCategory(req, res, next) {
        await addCategoryValidation.validateAsync(req.body);

        await this.#service.createCategory(req.body);

        return res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: "دسته بندی با موفقیت اضافه شد"
        })
    };

    async updateCategory(req, res, next) {
        const { id } = req.params;
        const { name } = req.body;

        await updateCategoryValidation.validateAsync({ name });

        await this.#service.updateCategory({id, name});

        return res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: "به روزرسانی با موفقیت انجام شد"
        });
    };

    async deleteCategory(req, res, next) {

    }

    async getParentsCategories(req, res, next) {

    };

    async getChildCategories(req, res, next) {

    };
};

module.exports = new CategoriesController();
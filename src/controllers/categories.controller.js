const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const CategoriesService = require("../services/categories.service");
const { addCategoryValidation, updateCategoryValidation } = require("../validations/categories.validation");
const { objectIdValidation } = require("../validations/id.validation");

class CategoriesController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = CategoriesService
    };

    async getAllCategories(req, res, next) {
        try {
            const categories = await this.#service.getAllCategories();
    
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                categories
            });
        } catch (error) {
            next(error)
        }
    };

    async getCategoryById(req, res, next) {
        try {
            const { id } = req.params;
            await objectIdValidation.validateAsync({ id });
    
            const category = await this.#service.getCategoryById(id);
    
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                category
            });
        } catch (error) {
            next(error);
        }
    };

    async createCategory(req, res, next) {
        try {
            await addCategoryValidation.validateAsync(req.body);
    
            await this.#service.createCategory(req.body);
    
            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "دسته بندی با موفقیت اضافه شد"
            });
        } catch (error) {
            next(error)
        }
    };

    async updateCategory(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            await objectIdValidation.validateAsync({ id });
            await updateCategoryValidation.validateAsync({ name });
    
            await this.#service.updateCategory({id, name});
    
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "به روزرسانی با موفقیت انجام شد"
            });
        } catch (error) {
            next(error)
        }
    };

    async deleteCategory(req, res, next) {
        try {            
            const { id } = req.params;
    
            await objectIdValidation.validateAsync({ id });
    
            await this.#service.deleteCategory({ id });
    
            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "دسته بندی با موفقیت حذف شد"
            });
        } catch (error) {
            next(error)
        }
    }

    async getChildCategories(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });
            
            const children = await this.#service.getChildCategories({ id });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                children
            });
        } catch (error) {
            next(error)
        }
    };
};

module.exports = new CategoriesController();
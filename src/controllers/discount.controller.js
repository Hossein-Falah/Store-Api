const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const discountService = require("../services/discount.service");
const { discountValidation } = require("../validations/discount.validation");

class DiscountController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = discountService;
    };

    async getAllDiscounts(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async getDiscount(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async createDiscount(req, res, next) {
        try {
            const discountData = await discountValidation.validateAsync(req.body);

            await this.#service.createDiscount(req, discountData);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "تخفیف با موفقیت ایجاد شد",
            });
        } catch (error) {
            next(error);
        }
    };

    async updateDiscountByDiscount(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async deleteDiscountByDiscount(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async deleteAllDiscounts(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async setAllDiscounts(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async setOneDiscount(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new DiscountController();
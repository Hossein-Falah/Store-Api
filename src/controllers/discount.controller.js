const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const discountService = require("../services/discount.service");
const { discountValidation, discountCodeValidation } = require("../validations/discount.validation");
const { objectIdValidation } = require("../validations/id.validation");

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
            const { code } = req.params;
            const { product } = req.body;

            await objectIdValidation.validateAsync({ id: product });

            const discount = await this.#service.getDiscount({ code, product });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                discount
            });
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
            const { discountID } = req.params;

            await objectIdValidation.validateAsync({ id: discountID });

            await this.#service.deleteDiscountByDiscount({ discountID });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "تخفیف با موفقیت حذف شد",
            });
        } catch (error) {
            next(error);
        }
    };

    async deleteAllDiscounts(req, res, next) {
        try {
            await this.#service.deleteAllDiscounts();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "تخفیف ها با موفقیت حذف شدند",
            });
        } catch (error) {
            next(error);
        }
    };

    async setAllDiscounts(req, res, next) {
        try {
            const { discount } = req.body;

            await discountCodeValidation.validateAsync({ discount });

            await this.#service.setAllDiscounts({ discount });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "تخفیف با موفقیت ایجاد شد",
            });
        } catch (error) {
            next(error);
        }
    };

    async setOneDiscount(req, res, next) {
        try {
            const { productID } = req.params;
            const { discount } = req.body;

            await objectIdValidation.validateAsync({ id: productID });

            await this.#service.setOneDiscount({ productID, discount });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "تخفیف با موفقیت ایجاد شد",
            });
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new DiscountController();
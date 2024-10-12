const autoBind = require("auto-bind");
const discountService = require("../services/discount.service");

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
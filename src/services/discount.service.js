const autoBind = require("auto-bind");
const DiscountModel = require("../models/discount.model");

class DiscountController {
    #model;

    constructor() {
        autoBind(this);
        this.#model = DiscountModel;
    };

    async getAllDiscounts() {
    
    };

    async getDiscount() {
    
    };

    async createDiscount() {
    
    };

    async updateDiscountByDiscount() {
    
    };

    async deleteDiscountByDiscount() {
    
    };

    async deleteAllDiscounts() {
    
    };

    async setAllDiscounts() {
    
    };

    async setOneDiscount() {
    
    };
};

module.exports = new DiscountController();
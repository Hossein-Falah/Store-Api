const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const DiscountModel = require("../models/discount.model");
const ProductModel = require("../models/product.model");

class DiscountController {
    #model;
    #productModel

    constructor() {
        autoBind(this);
        this.#model = DiscountModel;
        this.#productModel = ProductModel;
    };

    async getAllDiscounts() {
    
    };

    async getDiscount() {
    
    };

    async createDiscount(req, discountData) {
        const { code, percent, product, max } = discountData;
        
        const user = req?.user;

        await this.checkExistProduct(product);
        
        const createdDiscount = await this.#model.create({
            code,
            percent,
            product,
            max,
            uses: 0,
            author: user._id
        });

        if (!createdDiscount) throw new createHttpError.InternalServerError("خطا در ثبت تخفیف");
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

    async checkExistProduct(id) {
        const product = await this.#productModel.findById({ _id: id });
        if (!product) throw new createHttpError.NotFound("محصولی با همچین مشخصات یافت نشد");
    }
};

module.exports = new DiscountController();
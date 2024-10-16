const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const DiscountModel = require("../models/discount.model");
const ProductModel = require("../models/product.model");
const { deleteInvalidPropertyObject } = require("../utils/function.utils");

class DiscountController {
    #model;
    #productModel

    constructor() {
        autoBind(this);
        this.#model = DiscountModel;
        this.#productModel = ProductModel;
    };

    async getAllDiscounts() {
        const discounts = await this.#model.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "product",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $unwind: "$product"
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "product.category",
                    foreignField: "_id",
                    as: "product.category"
                }
            },
            {
                $unwind: "$product.category"
            },
            {
                $lookup: {
                    from: "users",
                    localField: "product.author",
                    foreignField: "_id",
                    as: "product.author"
                }
            },
            {
                $unwind: "$product.author"
            },
            {
                $lookup: {
                    from: "users",
                    localField: "author",
                    foreignField: "_id",
                    as: "author"
                }
            },
            {
                $unwind: "$author"
            },
            {
                $project: {
                    "product.category.__v": 0,
                    "product.author.password": 0,
                    "product.author.refreshToken": 0,
                    "product.author.role": 0,
                    "product.author.__v": 0,
                    "product.author.createdAt": 0,
                    "product.author.updatedAt": 0,
                    "author.createdAt": 0,
                    "author.updatedAt": 0,
                    "author.password": 0,
                    "author.refreshToken": 0,
                    "author.role": 0,
                    "author.__v": 0
                }
            }
        ]);

        return discounts;
    };

    async getDiscount({ code, product }) {
        await this.checkExistProduct(product);

        const discount = await this.#model.findOne({ code, product });
        if (!discount) {
            throw new createHttpError.NotFound("محصولی با همچین مشخصات یافت نشد");
        } else if (discount.uses === discount.max) {
            throw new createHttpError.BadRequest("تخفیف به پایان رسیده است");
        } else {
            await this.#model.findOneAndUpdate({ code, product }, { uses: discount.uses + 1 });

            return { message: "کد تخفیف با موفقیت اعمال شد" };
        }
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

    async updateDiscountByDiscount({ discountID, discountData }) {
        await this.checkExistDiscount(discountID);

        deleteInvalidPropertyObject(discountData);

        const resultUpdate = await this.#model.updateOne({ _id: discountID }, { $set: discountData });
        if (!resultUpdate.modifiedCount) throw new createHttpError.InternalServerError("خطا در ویرایش تخفیف");
    };

    async deleteDiscountByDiscount({ discountID }) {
        await this.checkExistDiscount(discountID);

        const resultDelete = await this.#model.deleteOne({ _id: discountID });
        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("خطا در حذف تخفیف");
    };

    async deleteAllDiscounts() {
        const result = await this.#model.deleteMany({});
        if (!result.deletedCount) throw new createHttpError.BadRequest("خطا در حذف تخفیف ها");
    };

    async setAllDiscounts({ discount }) {
        const result = await this.#productModel.updateMany({}, { $set: { discount } });

        if (!result.modifiedCount) throw new createHttpError.InternalServerError("خطای سرور");
    };

    async setOneDiscount({ productID, discount }) {
        await this.checkExistProduct(productID);

        const product = await this.#productModel.findOneAndUpdate({ _id: productID }, {
            discount
        });

        if (!product) throw new createHttpError.InternalServerError("خطا در ثبت تخفیف");
    };

    async checkExistDiscount(id) {
        const discount = await this.#model.findById({ _id: id });
        if (!discount) throw new createHttpError.NotFound("کد تخفیف با همچین مشخصات یافت نشد");
    }

    async checkExistProduct(id) {
        const product = await this.#productModel.findById({ _id: id });
        if (!product) throw new createHttpError.NotFound("محصولی با همچین مشخصات یافت نشد");
    }
};

module.exports = new DiscountController();
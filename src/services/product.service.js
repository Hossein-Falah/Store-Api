const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const ProductModel = require("../models/product.model");
const { getListOfImages } = require("../utils/function.utils");

class ProductService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = ProductModel;
    }

    async getProducts() {
        const products = await this.#model.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
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
                    "category.__v": 0,
                    "author.password": 0,
                    "author.refreshToken": 0,
                    "author.role": 0,
                    "author.__v": 0,
                }
            }
        ]);

        return products;
    }

    async getProductById() {
        
    }

    async createProduct(req, productData) {
        const { title, description, content, category, slug, status, tags, price, quantity, discount } = productData;
        
        if (!req?.body?.tags) req.body.tags = []
        const author = req?.user?._id;

        const images = getListOfImages(req?.files, "products");        
        
        await this.checkExistWithTitle({ title });
        await this.checkExistSlug({ slug });

        const newProduct = {
            title,
            description,
            content,
            author,
            images,
            category,
            slug,
            status,
            tags,
            price,
            quantity,
            discount
        };

        const product = await this.#model.create(newProduct);
        if (!product) throw new createHttpError.InternalServerError("محصول ایجاد نشد");
    };

    async updateProduct() {
        
    }

    async removeProduct(id) {
        const product = await this.checkExistProduct(id);

        const resultDelete = await this.#model.deleteOne({ _id: product._id });
        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("حذف محصول انجام نشد");
    };

    async likeProduct() {
        
    };

    async bookmarkProduct() {
        
    };

    async checkExistProduct(id) {
        const product = await this.#model.findById({ _id: id });
        if (!product) throw new createHttpError.NotFound("محصول مورد نظر پیدا نشد");
        return product;
    }

    async checkExistWithTitle({ title }) {
        const existTitle = await this.#model.findOne({ title });
        if (existTitle) throw new createHttpError.Conflict("نام عنوان تکراری است");
    }

    async checkExistSlug({ slug }) {
        const existSlug = await this.#model.findOne({ slug });
        if (existSlug) throw new createHttpError.Conflict("نام slug تکراری است");
    }
};

module.exports = new ProductService();
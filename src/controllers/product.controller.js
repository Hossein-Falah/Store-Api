const autoBind = require("auto-bind");
const productService = require("../services/product.service");
const { StatusCodes } = require("http-status-codes");
const { productValidation } = require("../validations/product.validation");
const { deleteImageFile, getListOfImages } = require("../utils/function.utils");

class ProductController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = productService;
    };

    async getProducts(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getProductById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async createProduct(req, res, next) {
        try {
            const productData = await productValidation.validateAsync(req.body);
            
            await this.#service.createProduct(req, productData);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "محصول با موفقیت ایجاد شد",
            });
        } catch (error) {
            const images = getListOfImages(req?.files, "products", "/public");
            await deleteImageFile(images);
            next(error);
        }
    };

    async updateProduct(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async removeProduct(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async likeProduct(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async bookmarkProduct(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new ProductController();
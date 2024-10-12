const autoBind = require("auto-bind");
const productService = require("../services/product.service");
const { StatusCodes } = require("http-status-codes");
const { productValidation, updateProductValidation } = require("../validations/product.validation");
const { deleteImageFile, getListOfImages } = require("../utils/function.utils");
const { objectIdValidation } = require("../validations/id.validation");

class ProductController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = productService;
    };

    async getProducts(req, res, next) {
        try {
            const products = await this.#service.getProducts();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                products
            })
        } catch (error) {
            next(error);
        }
    }

    async getProductById(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const product = await this.#service.getProductById(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                product
            })
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
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });
            const productData = await updateProductValidation.validateAsync(req.body);            

            await this.#service.updateProduct(req, id, productData);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "محصول با موفقیت ویرایش شد",
            })
        } catch (error) {    
            const images = getListOfImages(req?.files, "products", "/public");
            await deleteImageFile(images);
            next(error);
        }
    }

    async removeProduct(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.removeProduct(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "محصول با موفقیت حذف شد",
            })
        } catch (error) {
            next(error);
        }
    };

    async likeProduct(req, res, next) {
        try {
            const { id } = req.params;

            const message = await this.#service.likeProduct(req, id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    };

    async bookmarkProduct(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.bookmarkProduct(req, id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new ProductController();
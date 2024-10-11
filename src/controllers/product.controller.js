const autoBind = require("auto-bind");
const productService = require("../services/product.service");

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
            
        } catch (error) {
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
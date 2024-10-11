const autoBind = require("auto-bind");
const ProductModel = require("../models/product.model");

class ProductService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = ProductModel;
    }

    async getProducts() {
        
    }

    async getProductById() {
        
    }

    async createProduct() {
        
    };

    async updateProduct() {
        
    }

    async removeProduct() {
        
    };

    async likeProduct() {
        
    };

    async bookmarkProduct() {
        
    };
};

module.exports = new ProductService();
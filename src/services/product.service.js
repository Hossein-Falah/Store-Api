const autoBind = require("auto-bind");
const ProductModel = require("../models/product.model");

class ProductService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = ProductModel;
    }
};

module.exports = new ProductService();
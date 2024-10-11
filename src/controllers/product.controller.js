const autoBind = require("auto-bind");
const productService = require("../services/product.service");

class ProductController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = productServicel;
    }
};

module.exports = new ProductController();
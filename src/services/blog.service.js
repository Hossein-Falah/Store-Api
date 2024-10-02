const autoBind = require("auto-bind");
const BlogModel = require("../models/blog.model");

class blogService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = BlogModel;
    }
};

module.exports = new blogService();
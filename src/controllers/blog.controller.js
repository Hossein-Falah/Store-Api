const autoBind = require("auto-bind");
const blogService = require("../services/blog.service");

class BlogController {
    #service;

    constructor () {
        autoBind(this);
        this.#service = blogService;
    };

    async getAllBlogs (req, res, next) {

    }

    async getBlogById (req, res, next) {

    }

    async createBlog (req, res, next) {

    }

    async updateBlogById (req, res, next) {

    }

    async deleteBlogById (req, res, next) {

    }

    async likeBlogById (req, res, next) {

    }

    async bookmarkBlogById (req, res, next) {

    }

    async getCommentsForBlog (req, res, next) {

    }

    async createCommentForBlog (req, res, next) {

    }
};

module.exports = new BlogController();
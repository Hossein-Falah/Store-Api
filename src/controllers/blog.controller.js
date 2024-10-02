const autoBind = require("auto-bind");
const blogService = require("../services/blog.service");
const { StatusCodes } = require("http-status-codes");

class BlogController {
    #service;

    constructor () {
        autoBind(this);
        this.#service = blogService;
    };

    async getAllBlogs (req, res, next) {
        const blogs = await this.#service.getAllBlogs();

        return res.status(StatusCodes.OK).json({
            statusCode : StatusCodes.OK,
            blogs
        })
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
const autoBind = require("auto-bind");
const blogService = require("../services/blog.service");
const { StatusCodes } = require("http-status-codes");
const { createBlogValidation } = require("../validations/blog.validation");
const { deleteImageFile } = require("../utils/function.utils");
const { objectIdValidation } = require("../validations/id.validation");

class BlogController {
    #service;

    constructor () {
        autoBind(this);
        this.#service = blogService;
    };

    async getAllBlogs (req, res, next) {
        try {
            const blogs = await this.#service.getAllBlogs();
    
            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                blogs
            })
        } catch (error) {
            next(error)
        }
    }

    async getBlogById (req, res, next) {
        try {
            const { id } = req.params;
            await objectIdValidation.validateAsync({ id });

            const blog = await this.#service.getBlogById({ id });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                blog
            })

        } catch (error) {
            next(error);
        }
    }

    async createBlog (req, res, next) {
        try {
            const blogData = await createBlogValidation.validateAsync(req.body);
            
            await this.#service.createBlog(req, blogData);

            return res.status(StatusCodes.CREATED).json({
                statusCode : StatusCodes.CREATED,
                message: "بلاگ با موفقیت ایجاد شد",
            })
        } catch (error) {
            if (req?.file) {
                const originalName = req?.file?.path?.replace(/\\/g, "/").split("/")[6];
                const imagePath = `public/uploads/blogs/${originalName}`;
                deleteImageFile(imagePath);
            }
            next(error);
        }
    }

    async updateBlogById (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async deleteBlogById (req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.deleteBlogById({ id });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "بلاگ با موفقعیت حذف شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async likeBlogById (req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.likeBlogById(req, id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    }

    async bookmarkBlogById (req, res, next) {
        try {
            const { id } = req.params;
            
            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.bookmarkBlogById(req, id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    }

    async getCommentsForBlog (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async createCommentForBlog (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new BlogController();
const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const readingTime = require('reading-time');

const BlogModel = require("../models/blog.model");
const CategoryModel = require("../models/category.model");

class blogService {
    #model;
    #categoryModel;

    constructor() {
        autoBind(this);
        this.#model = BlogModel;
        this.#categoryModel = CategoryModel;
    }

    async getAllBlogs () {
        const blogs = await this.#model.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "author",
                    foreignField: '_id',
                    as: 'author'
                }
            },
            {
                $unwind: "$author"
            },
            {
                $project: {
                    "author.password": 0,
                    "author.refreshToken": 0,
                    "author.__v": 0,
                    "author.role": 0
                }
            }
        ]);

        if (!blogs) throw new createHttpError.NotFound("بلاگی پیدا نشد");
        
        return blogs
    }

    async getBlogById({ id }) {
        const blog = await this.#model.findById(id).populate([
            {path: "category", select: ['name']}, 
            {path: "author", select: ['username', 'name', 'email', 'phone']}
        ]);
        if (!blog) throw new createHttpError.NotFound("بلاگی پیدا نشد");
        return blog;
    };

    async createBlog(req, blogData) {
        if (!req?.body?.tags) req.body.tags = [];
        const { title, description, content, slug, category, tags, reading_time } = blogData

        const originalName = req?.file?.path?.replace(/\\/g, "/").split("/")[6];
        const image = `/uploads/blogs/${originalName}`;
        
        const author = req.user._id;    

        const existSlug = await this.#model.findOne({ slug: slug });
        if (existSlug) throw new createHttpError.Conflict("نام slug تکراری است");

        const existCategory = await this.#categoryModel.findById({ _id: category });
        if (!existCategory) throw new createHttpError.NotFound("دسته بندی وجود ندارد");

        const newBlog = { 
            title,
            description,
            content,
            author,
            image,
            slug,
            category,
            tags,
            reading_time: readingTime(content.replace(/<[^>]*>/g, ''))
        }

        const blog = await this.#model.create(newBlog);
        if (!blog) throw new createHttpError.InternalServerError("بلاگ ذخیره نشد");
    };

    async updateBlogById() {

    };

    async deleteBlogById() {

    };

    async likeBlogById() {

    };

    async bookmarkBlogById() {

    };

    async getCommentsForBlog() {

    };

    async createCommentForBlog() {

    };
};

module.exports = new blogService();
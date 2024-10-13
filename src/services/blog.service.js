const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const readingTime = require('reading-time');

const BlogModel = require("../models/blog.model");
const CategoryModel = require("../models/category.model");
const { deleteImageFile, deleteInvalidPropertyObject } = require("../utils/function.utils");

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
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            },
            {
                $project: {
                    "category.__v": 0,
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
        const { title, description, content, slug, category, tags } = blogData

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

    async updateBlogById(req, id, blogData) {
        const blog = this.checkExistBlog(id);

        if (!req?.body?.tags) req.body.tags = [];

        if (req?.file) {
            const originalName = req?.file?.path?.replace(/\\/g, "/").split("/")[6];
            const image = `/uploads/blogs/${originalName}`;
            blogData.image = image;
            deleteImageFile(blog.image);
        }

        const existCategory = await this.#categoryModel.findById({ _id: blogData.category });
        if (!existCategory) throw new createHttpError.NotFound("دسته بندی وجود ندارد");

        deleteInvalidPropertyObject(blogData, ['bookmarks', 'comments', 'dislikes', 'likes', 'author']);
        
        const updateResult = await this.#model.updateOne({ _id: id }, { $set: blogData });
        if (!updateResult.modifiedCount) throw new createHttpError.InternalServerError("مشکلی در آپدیت بلاگ پیش آمده مجددا تلاش کنید")
    };

    async deleteBlogById({ id }) {
        const blog = await this.#model.findById(id)
        if (!blog) throw new createHttpError.NotFound("بلاگ مورد نظر یافت نشد");

        const resultDelete = await this.#model.deleteOne({ _id: blog._id });
        if (resultDelete.deletedCount == 0) throw new createHttpError.InternalServerError("حذف بلاگ انجام نشد");
    };

    async likeBlogById(req, id) {
        const user = req.user;

        await this.checkExistBlog(id);

        const likedBlog = await this.#model.findOne({ _id: id, likes: user._id });
        const disLikedBlog = await this.#model.findOne({ _id: id, dislikes: user._id });

        let message;

        if (likedBlog) {
            await this.#model.updateOne({ _id: id }, { $pull: { likes: user._id }, $push: { dislikes: user._id } });
            message = "مقاله دیس لایک شد";
        } else if(disLikedBlog) {
            await this.#model.updateOne({ _id: id }, { $pull: { dislikes: user._id }, $push: { likes: user._id } });
            message = "مقاله لایک شد";
        } else {
            await this.#model.updateOne({ _id: id }, { $push: { likes: user._id } });
            message = "مقاله لایک شد";
        }

        return message;
    };

    async bookmarkBlogById(req, id) {
        const user = req.user;

        await this.checkExistBlog(id);

        const bookmarkedBlog = await this.#model.findOne({ _id: id, bookmarks: user._id });

        const updateQuery = bookmarkedBlog ? { $pull: { bookmarks: user._id } } : { $push: { bookmarks: user._id }};
        await this.#model.updateOne({ _id: id }, updateQuery);

        const message = bookmarkedBlog ? "مقاله از لیست علاقه مندی پاک شد" : "مقاله به لیست علاقه مندی ها اضافه شد";
        return message;
    };

    async getCommentsForBlog() {

    };

    async createCommentForBlog() {

    };

    async checkExistBlog(id) {
        const blog = await this.#model.findById(id);
        if (!blog) throw new createHttpError.NotFound("بلاگ مورد نظر یافت نشد");
        return blog;
    }
};

module.exports = new blogService();
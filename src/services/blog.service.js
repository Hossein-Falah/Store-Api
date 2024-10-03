const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const BlogModel = require("../models/blog.model");

class blogService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = BlogModel;
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
};

module.exports = new blogService();
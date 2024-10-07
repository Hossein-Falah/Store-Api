const autoBind = require("auto-bind");
const createHttpError = require('http-errors');

const CommentModel = require("../models/comment.model");
const BlogModel = require("../models/blog.model");

class CommentService {
    #model;
    #blogModel;

    constructor() {
        autoBind(this);
        this.#model = CommentModel;
        this.#blogModel = BlogModel;
    };

    async getAllComments() {
        const comments = await this.#model.find({ reply: null }, { __v: 0 });

        return comments;
    }

    async getCommentById(id) {
        const comment = await this.#model.findById({ _id: id });
        return comment;
    }

    async createComment(req, commentData) {
        const user = req.user;
        const { comment, blog, score } = commentData;
        
        const checkExistBlog = await this.#blogModel.findById({ _id: blog });
        if (!checkExistBlog) throw new createHttpError.NotFound("مقاله مورد نظر یافت نشد");

        const resultComment = await this.#model.create({ 
            user, 
            comment, 
            blog, 
            score,
            isAccept: 0,
            isAnswer: 0
        });

        if (!resultComment) throw new createHttpError.InternalServerError("خطای در ارسال نظر پیش آمده مجددا تلاش کنید");
    };

    async answerComment(req, id, commentData) {
        const user = req.user;

        const blog = await this.checkExistComment(id);

        const mainComment = await this.#model.findOneAndUpdate(
            { _id: blog._id },
            { $set: { isAnswer: 1 }},
            { new: true }
        );

        const answerToComment = await this.#model.create({
            comment: commentData.comment,
            blog: mainComment.blog,
            user: user._id,
            score: commentData.score,
            isAnswer: 1,
            isAccept: 0,
            reply: mainComment._id
        });

        if (!answerToComment) throw new createHttpError.InternalServerError("خطای در ارسال نظر پیش آمده مجددا تلاش کنید");
    }

    async acceptComment(id) {
        const blog = await this.checkExistComment(id);

        const resultUpdate = await this.#model.updateOne({ _id: blog._id }, { $set: { isAccept: 1 }});
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    }

    async rejectComment(id) {
        const blog = await this.checkExistComment(id);

        const resultUpdate = await this.#model.updateOne({ _id: blog._id }, { $set: { isAccept: 0 }});
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    }

    async removeComment(id) {
        const blog = await this.checkExistComment(id);

        const resultDelete = await this.#model.deleteOne({ _id: blog._id });
        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("حذف کامنت انجام نشد");
    };

    async updateComment(id, { comment }) {
        await this.checkExistComment(id);

        const resultUpdate = await this.#model.updateOne({ _id: id }, { $set: { comment } });
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    };

    async getCommentLikes() {
        const users = await this.#model.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "likes",
                    foreignField: "_id",
                    as: "likes"
                }
            },
            {
                $unwind: "$likes"
            },
            {
                $group: {
                    _id: "$_id",
                    likes: { $push: "$likes" }
                }
            },
            {
                $project: {
                    "likes.role": 0,
                    "likes.password": 0,
                    "likes.refreshToken": 0,
                    "likes.__v": 0
                }
            }
        ]);
        
        return users;
    }

    async likeComment(req, id) {
        const user = req.user;

        await this.checkExistComment(id);

        const likedBlog = await this.#model.findOne({ _id: id, likes: user._id });
        const disLikedBlog = await this.#model.findOne({ _id: id, dislikes: user._id });

        let message;

        if (likedBlog) {
            await this.#model.updateOne({ _id: id }, { $pull: { likes: user._id }, $push: { dislikes: user._id } });
            message = "کامنت دیس لایک شد";
        } else if(disLikedBlog) {
            await this.#model.updateOne({ _id: id }, { $pull: { dislikes: user._id }, $push: { likes: user._id } });
            message = "کامنت لایک شد";
        } else {
            await this.#model.updateOne({ _id: id }, { $push: { likes: user._id } });
            message = "کامنت لایک شد";
        }

        return message;
    }

    async checkExistComment(id) {
        const blog = await this.#model.findById({ _id: id });
        if (!blog) throw new createHttpError.NotFound("کامنت مورد نظر یافت نشد");
        return blog;
    }
};

module.exports = new CommentService();
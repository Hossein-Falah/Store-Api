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
        const comments = await this.#model.find({});

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

    async answerComment() {
        
    }

    async acceptComment(id) {
        const checkExistComment = await this.#model.findById({ _id: id });
        if (!checkExistComment) throw new createHttpError.NotFound("کامنت مورد نظر یافت نشد");

        const resultUpdate = await this.#model.updateOne({ _id: checkExistComment._id }, { $set: { isAccept: 1 }});
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    }

    async rejectComment(id) {
        const checkExistComment = await this.#model.findById({ _id: id });
        if (!checkExistComment) throw new createHttpError.NotFound("کامنت مورد نظر یافت نشد");

        const resultUpdate = await this.#model.updateOne({ _id: checkExistComment._id }, { $set: { isAccept: 0 }});
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    }

    async removeComment(id) {
        const checkExistComment = await this.#model.findById({ _id: id });
        if (!checkExistComment) throw new createHttpError.NotFound("کامنت مورد نظر یافت نشد");

        const resultDelete = await this.#model.deleteOne({ _id: checkExistComment._id });
        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("حذف کامنت انجام نشد");
    };

    async updateComment(id, { comment }) {
        const checkExistComment = await this.#model.findById({ _id: id });
        if (!checkExistComment) throw new createHttpError.NotFound("کامنت مورد نظر یافت نشد");

        const resultUpdate = await this.#model.updateOne({ _id: id }, { $set: { comment } });
        if (!resultUpdate.modifiedCount) throw new createHttpError.NotFound("بروزرسانی انجام نشد");
    };

    async getCommentLikes() {
        
    }

    async likeComment() {
        
    }
};

module.exports = new CommentService();
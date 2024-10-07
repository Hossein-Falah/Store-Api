const autoBind = require("auto-bind");
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

    async getCommentById() {
        
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

    async acceptComment() {
        
    }

    async rejectComment() {
        
    }

    async removeComment() {
        
    }

    async updateComment() {

    };

    async getCommentLikes() {
        
    }

    async likeComment() {
        
    }
};

module.exports = new CommentService();
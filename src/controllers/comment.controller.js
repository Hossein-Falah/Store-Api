const autoBind = require("auto-bind");
const commentService = require("../services/comment.service");
const { StatusCodes } = require("http-status-codes");
const { createCommentValidation } = require("../validations/comment.validation");
const { objectIdValidation } = require("../validations/id.validation");

class CommentController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = commentService;
    }

    async getAllComments(req, res, next) {
        try {
            const comments = await this.#service.getAllComments();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                comments
            });
        } catch (error) {
            next(error);
        }
    }

    async getCommentById(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const comment = await this.#service.getCommentById(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                comment
            });
        } catch (error) {
            next(error);
        }
    }

    async createComment(req, res, next) {
        try {
            const commentData = await createCommentValidation.validateAsync(req.body);

            await this.#service.createComment(req, commentData);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "کامنت با موفقعیت ساخته شد"
            })
        } catch (error) {
            next(error);
        }
    };

    async answerComment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async acceptComment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async rejectComment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async removeComment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async updateComment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async getCommentLikes(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async likeComment(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
};

module.exports = new CommentController();
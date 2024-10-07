const autoBind = require("auto-bind");
const commentService = require("../services/comment.service");
const { StatusCodes } = require("http-status-codes");
const { createCommentValidation, updateCommentValidation, answerCommentValidation } = require("../validations/comment.validation");
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
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const commentData = await answerCommentValidation.validateAsync(req.body);

            await this.#service.answerComment(req, id, commentData);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "کامنت با موفقیت پاسخ داده شد"
            });
        } catch (error) {
            next(error);
        }
    }


    async acceptComment(req, res, next) {
        try {
            const { id } = req.params;
            
            await objectIdValidation.validateAsync({ id });

            await this.#service.acceptComment(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "کامنت با موفقیت قبول شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async rejectComment(req, res, next) {
        try {
            const { id } = req.params;

            await this.#service.rejectComment(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "کامنت با موفقیت رد شد"
            })
        } catch (error) {
            next(error);
        }
    }

    async removeComment(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.removeComment(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "کامنت با موفقیت حذف شد"
            });
        } catch (error) {
            next(error);
        }
    }

    async updateComment(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });
            
            const commentData = await updateCommentValidation.validateAsync(req.body);

            await this.#service.updateComment(id, commentData);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "کامنت با موفقیت ویرایش شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async getCommentLikes(req, res, next) {
        try {
            const users = await this.#service.getCommentLikes();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                users
            })
        } catch (error) {
            next(error);
        }
    }

    async likeComment(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.likeComment(req, id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new CommentController();
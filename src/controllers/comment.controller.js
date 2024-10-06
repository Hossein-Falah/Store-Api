const autoBind = require("auto-bind");
const commentService = require("../services/comment.service");

class CommentController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = commentService;
    }

    async getAllComments(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getCommentById(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async createComment(req, res, next) {
        try {
            
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
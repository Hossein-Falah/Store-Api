const autoBind = require("auto-bind");
const CommentModel = require("../models/comment.model");

class CommentService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = CommentModel;
    };

    async getAllComments() {
        
    }

    async getCommentById() {
        
    }

    async createComment() {
        
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
const { Router } = require("express");
const CommentController = require("../controllers/comment.controller");

const router = Router();

router.get(`/`, CommentController.getAllComments);
router.get(`/:id`, CommentController.getCommentById);
router.post(`/create`, CommentController.createComment);
router.post(`/answer/:commentID`, CommentController.answerComment);
router.put(`/accept/:commentID`, CommentController.acceptComment);
router.put(`/reject/:commentID`, CommentController.rejectComment);
router.delete(`/:id`, CommentController.removeComment);
router.put(`/:id`, CommentController.updateComment);
router.get(`/likes`, CommentController.getCommentLikes);
router.put(`/like/:id`, CommentController.likeComment);

module.exports = {
    CommentRoutes: router
}
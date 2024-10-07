const { Router } = require("express");
const CommentController = require("../controllers/comment.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.get(`/`, CommentController.getAllComments);
router.get(`/:id`, CommentController.getCommentById);
router.post(`/create`, authenticateToken, CommentController.createComment);
router.post(`/answer/:commentID`, CommentController.answerComment);
router.put(`/accept/:commentID`, CommentController.acceptComment);
router.put(`/reject/:commentID`, CommentController.rejectComment);
router.delete(`/delete/:id`, CommentController.removeComment);
router.put(`/update/:id`, CommentController.updateComment);
router.get(`/likes`, CommentController.getCommentLikes);
router.put(`/like/:id`, CommentController.likeComment);

module.exports = {
    CommentRoutes: router
}
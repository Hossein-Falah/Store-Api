const { Router } = require("express");
const CommentController = require("../controllers/comment.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.get(`/`, CommentController.getAllComments);
router.get(`/:id`, CommentController.getCommentById);
router.post(`/create`, authenticateToken, CommentController.createComment);
router.post(`/answer/:id`, CommentController.answerComment);
router.put(`/accept/:id`, CommentController.acceptComment);
router.put(`/reject/:id`, CommentController.rejectComment);
router.delete(`/delete/:id`, CommentController.removeComment);
router.put(`/update/:id`, CommentController.updateComment);
router.get(`/likes`, CommentController.getCommentLikes);
router.put(`/like/:id`, authenticateToken, CommentController.likeComment);

module.exports = {
    CommentRoutes: router
}
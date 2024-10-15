const { Router } = require("express");
const CommentController = require("../controllers/comment.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, CommentController.getAllComments);
router.post(`/create`, authenticateToken, CommentController.createComment);
router.post(`/answer/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CommentController.answerComment);
router.put(`/accept/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CommentController.acceptComment);
router.put(`/reject/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CommentController.rejectComment);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CommentController.removeComment);
router.put(`/update/:id`, CommentController.updateComment);
router.get(`/likes`, CommentController.getCommentLikes);
router.get(`/:id`, CommentController.getCommentById);
router.put(`/like/:id`, authenticateToken, CommentController.likeComment);

module.exports = {
    CommentRoutes: router
}
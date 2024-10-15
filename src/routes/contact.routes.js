const { Router } = require("express");
const ContactController = require("../controllers/contact.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), ContactController.getMessages);
router.get(`/:id`, authenticateToken, ContactController.getMessage);
router.post(`/send`, authenticateToken, ContactController.sendMessage);
router.put(`/update/:id`, authenticateToken, ContactController.UpdateMessage);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), ContactController.deleteMessage);
router.post(`/answer/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), ContactController.answerMessage);

module.exports = {
    ContactRoutes: router
}
const { Router } = require("express");
const ContactController = require("../controllers/contact.controller");

const router = Router();

router.get(`/`, ContactController.getMessages);
router.get(`/:id`, ContactController.getMessage);
router.post(`/send`, ContactController.sendMessage);
router.put(`/update/:id`, ContactController.UpdateMessage);
router.delete(`/delete/:id`, ContactController.deleteMessage);
router.post(`/answer/:id`, ContactController.answerMessage);

module.exports = {
    ContactRoutes: router
}
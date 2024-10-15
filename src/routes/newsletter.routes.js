const { Router } = require("express");
const NewsletterController = require("../controllers/newsletter.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NewsletterController.getNewsLetters);
router.get(`/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NewsletterController.getNewsLetter);
router.post(`/subscribe`, authenticateToken, checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), NewsletterController.subscribe);
router.put(`/unsubscribe`, authenticateToken, checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), NewsletterController.unsubscribe);
router.post(`/send`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NewsletterController.sendNewsLetter);

module.exports = {
    NewsLetterRoutes: router
}
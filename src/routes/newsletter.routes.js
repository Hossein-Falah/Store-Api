const { Router } = require("express");
const NewsletterController = require("../controllers/newsletter.controller");

const router = Router();

router.get(`/`, NewsletterController.getNewsLetters);
router.get(`/:id`, NewsletterController.getNewsLetter);
router.post(`/subscribe`, NewsletterController.subscribe);
router.post(`/unsubscribe`, NewsletterController.unsubscribe);
router.post(`/send`, NewsletterController.sendNewsLetter);

module.exports = {
    NewsLetterRoutes: router
}
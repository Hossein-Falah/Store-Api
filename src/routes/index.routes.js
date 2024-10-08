const { Router } = require("express");
const { AuthRoutes } = require("./auth.routes");
const { UserRoutes } = require("./user.routes");
const { BlogRoutes } = require("./blog.routes");
const { CategoriesRoutes } = require("./categories.routes");
const { CommentRoutes } = require("./comment.routes");
const { NotificationRoutes } = require("./notification.routes");
const { ContactRoutes } = require("./contact.routes");
const { NewsLetterRoutes } = require("./newsletter.routes");
const { MenuRoutes } = require("./menu.routes");

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/categories', CategoriesRoutes);
router.use('/blogs', BlogRoutes);
router.use(`/comments`, CommentRoutes);
router.use(`/notifications`, NotificationRoutes);
router.use(`/contact`, ContactRoutes);
router.use(`/newsletter`, NewsLetterRoutes);
router.use(`/menu`, MenuRoutes);

module.exports = {
    AllRoutes: router
}
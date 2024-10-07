const { Router } = require("express");
const { AuthRoutes } = require("./auth.routes");
const { UserRoutes } = require("./user.routes");
const { BlogRoutes } = require("./blog.routes");
const { CategoriesRoutes } = require("./categories.routes");
const { CommentRoutes } = require("./comment.routes");

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/categories', CategoriesRoutes);
router.use('/blogs', BlogRoutes);
router.use(`/comments`, CommentRoutes)

module.exports = {
    AllRoutes: router
}
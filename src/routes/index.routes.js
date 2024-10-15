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
const { ProductRoutes } = require("./product.routes");
const { DiscountRoutes } = require("./discount.routes");
const { DepartmentRoutes } = require("./department.routes");
const { TicketRoutes } = require("./ticket.routes");
const { PermissionRoutes } = require("./permission.routes");
const { RoleRoutes } = require("./role.routes");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', authenticateToken, UserRoutes);
router.use('/categories', CategoriesRoutes);
router.use('/blogs', BlogRoutes);
router.use(`/comments`, CommentRoutes);
router.use(`/notifications`, NotificationRoutes);
router.use(`/contact`, ContactRoutes);
router.use(`/newsletter`, NewsLetterRoutes);
router.use(`/menu`, MenuRoutes);
router.use(`/products`, ProductRoutes);
router.use(`/discount`, DiscountRoutes);
router.use(`/department`, DepartmentRoutes);
router.use(`/ticket`, TicketRoutes);
router.use(`/permission`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), PermissionRoutes);
router.use(`/role`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), RoleRoutes);

module.exports = {
    AllRoutes: router
}
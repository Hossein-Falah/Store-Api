const { Router } = require("express");
const MenuController = require("../controllers/menu.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, MenuController.getAllMenus);
router.post(`/create`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), MenuController.createMenu);
router.put(`/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), MenuController.updateMenu);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), MenuController.deleteMenu);

module.exports = {
    MenuRoutes: router
}
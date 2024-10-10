const { Router } = require("express");
const MenuController = require("../controllers/menu.controller");

const router = Router();

router.get(`/`, MenuController.getAllMenus);
router.get(`/all`, MenuController.getMenusForAdmin);
router.post(`/create`, MenuController.createMenu);
router.put(`/update/:id`, MenuController.updateMenu);
router.delete(`/delete/:id`, MenuController.deleteMenu);

module.exports = {
    MenuRoutes: router
}
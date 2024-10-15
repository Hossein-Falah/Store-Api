const { Router } = require("express");
const CategoriesController = require("../controllers/categories.controller");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");

const router = Router();

router.get(`/`, CategoriesController.getAllCategories);
router.get(`/:id`, CategoriesController.getCategoryById);
router.post(`/create`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CategoriesController.createCategory);
router.patch(`/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CategoriesController.updateCategory);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), CategoriesController.deleteCategory);
router.get(`/children/:id`, CategoriesController.getChildCategories);

module.exports = {
    CategoriesRoutes: router
}
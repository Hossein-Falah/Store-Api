const { Router } = require("express");
const CategoriesController = require("../controllers/categories.controller");

const router = Router();

router.get(`/`, CategoriesController.getAllCategories);
router.get(`/:id`, CategoriesController.getCategoryById);
router.post(`/create`, CategoriesController.createCategory);
router.patch(`/update/:id`, CategoriesController.updateCategory);
router.delete(`/delete/:id`, CategoriesController.deleteCategory);
router.get(`/children/:id`, CategoriesController.getChildCategories);

module.exports = {
    CategoriesRoutes: router
}
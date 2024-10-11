const { Router } = require("express");
const ProductController = require("../controllers/product.controller");

const router = Router();

router.get(`/`, ProductController.getProducts);
router.get(`/:id`, ProductController.getProductById);
router.post(`/create`, ProductController.createProduct);
router.patch(`/update/:id`, ProductController.updateProduct);
router.delete(`/delete/:id`, ProductController.removeProduct);
router.put(`/like/:id`, ProductController.likeProduct);
router.put(`/bookmark/:id`, ProductController.bookmarkProduct);

module.exports = {
    ProductRoutes: router
}
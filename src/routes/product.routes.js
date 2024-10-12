const { Router } = require("express");
const ProductController = require("../controllers/product.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");
const { uploadMiddleware } = require("../middlewares/uploader.middleware");
const tags = require("../middlewares/tags.middleware");

const router = Router();

const uploadProduct = uploadMiddleware('products');

router.get(`/`, ProductController.getProducts);
router.get(`/:id`, ProductController.getProductById);
router.post(`/create`, authenticateToken, uploadProduct.array('images', 10), tags("tags"), ProductController.createProduct);
router.patch(`/update/:id`, ProductController.updateProduct);
router.delete(`/delete/:id`, ProductController.removeProduct);
router.put(`/like/:id`, authenticateToken, ProductController.likeProduct);
router.put(`/bookmark/:id`, ProductController.bookmarkProduct);

module.exports = {
    ProductRoutes: router
}
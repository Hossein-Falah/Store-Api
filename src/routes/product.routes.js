const { Router } = require("express");
const ProductController = require("../controllers/product.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { uploadMiddleware } = require("../middlewares/uploader.middleware");
const tags = require("../middlewares/tags.middleware");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

const uploadProduct = uploadMiddleware('products');

router.get(`/`, ProductController.getProducts);
router.get(`/:id`, ProductController.getProductById);
router.post(`/create`, authenticateToken, uploadProduct.array('images', 10), tags("tags"), checkPermission([PERMISSIONS.ADMIN]), ProductController.createProduct);
router.patch(`/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), uploadProduct.array('images', 10), tags("tags"), ProductController.updateProduct);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), ProductController.removeProduct);
router.put(`/like/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), ProductController.likeProduct);
router.put(`/bookmark/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), ProductController.bookmarkProduct);

module.exports = {
    ProductRoutes: router
}
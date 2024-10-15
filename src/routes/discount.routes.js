const { Router } = require("express");
const DiscountController = require("../controllers/discount.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.getAllDiscounts);
router.post(`/create`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), authenticateToken, DiscountController.createDiscount);
router.patch(`/update/:discountID`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.updateDiscountByDiscount);
router.put(`/one/:productID`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.setOneDiscount);
router.delete(`/delete/:discountID`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.deleteDiscountByDiscount);
router.post(`/all`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.setAllDiscounts);
router.delete(`/all`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), DiscountController.deleteAllDiscounts);
router.post(`/:code`, authenticateToken, DiscountController.getDiscount);

module.exports = {
    DiscountRoutes: router
}
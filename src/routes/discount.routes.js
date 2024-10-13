const { Router } = require("express");
const DiscountController = require("../controllers/discount.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.get(`/`, DiscountController.getAllDiscounts);
router.post(`/create`, authenticateToken, DiscountController.createDiscount);
router.put(`/update/:discountID`, DiscountController.updateDiscountByDiscount);
router.put(`/one/:productID`, DiscountController.setOneDiscount);
router.delete(`/delete/:discountID`, DiscountController.deleteDiscountByDiscount);
router.post(`/all`, DiscountController.setAllDiscounts);
router.delete(`/all`, DiscountController.deleteAllDiscounts);
router.post(`/:code`, DiscountController.getDiscount);

module.exports = {
    DiscountRoutes: router
}
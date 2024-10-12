const { Router } = require("express");
const DiscountController = require("../controllers/discount.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.get(`/`, DiscountController.getAllDiscounts);
router.post(`/create`, authenticateToken, DiscountController.createDiscount);
router.post(`/:code`, DiscountController.getDiscount);
router.put(`/update/:discountID`, DiscountController.updateDiscountByDiscount);
router.put(`/one/:discountID`, DiscountController.setOneDiscount);
router.delete(`/delete/:discountID`, DiscountController.deleteDiscountByDiscount);
router.put(`/all`, DiscountController.setAllDiscounts);
router.delete(`/all`, DiscountController.deleteAllDiscounts);

module.exports = {
    DiscountRoutes: router
}
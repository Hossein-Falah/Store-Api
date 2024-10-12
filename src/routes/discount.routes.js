const { Router } = require("express");
const DiscountController = require("../controllers/discount.controller");

const router = Router();

router.get(`/`, DiscountController.getAllDiscounts);
router.post(`/:code`, DiscountController.getDiscount);
router.post(`/create`, DiscountController.createDiscount);
router.put(`/update/:discountID`, DiscountController.updateDiscountByDiscount);
router.put(`/one/:discountID`, DiscountController.setOneDiscount);
router.delete(`/delete/:discountID`, DiscountController.deleteDiscountByDiscount);
router.put(`/all`, DiscountController.setAllDiscounts);
router.delete(`/all`, DiscountController.deleteAllDiscounts);

module.exports = {
    DiscountRoutes: router
}
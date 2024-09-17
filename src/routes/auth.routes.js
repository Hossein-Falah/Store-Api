const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/forget-password', authController.forgetPassword);
router.post('/reset-password/:token', authController.resetPassword);
router.get('/me', authenticateToken, authController.getMe);

module.exports = {
    AuthRoutes: router
}
const { Router } = require("express");
const { AuthController } = require("../controllers/Auth.Controller");

const router = Router();

router.get('/login', AuthController.login);

module.exports = {
    AuthRoutes: router
}
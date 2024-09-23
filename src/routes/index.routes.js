const { Router } = require("express");
const { AuthRoutes } = require("./auth.routes");
const { UserRoutes } = require("./user.routes");

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);

module.exports = {
    AllRoutes: router
}
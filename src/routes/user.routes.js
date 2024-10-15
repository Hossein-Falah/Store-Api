const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get('/', checkPermission([PERMISSIONS.ADMIN]), userController.getAllUsers);
router.get('/:id', checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), userController.getUserById);
router.patch('/update/:id', checkPermission([PERMISSIONS.ADMIN, PERMISSIONS.USER]), userController.updateUser);
router.delete('/delete/:id', checkPermission([PERMISSIONS.ADMIN]), userController.deleteUser);
router.put('/ban/:id', checkPermission([PERMISSIONS.ADMIN]), userController.banUser);
router.put('/unban/:id', checkPermission([PERMISSIONS.ADMIN]), userController.unbanUser);
router.put('/role/:id', checkPermission([PERMISSIONS.ADMIN]), userController.changeUserRole);

module.exports = {
    UserRoutes: router
}
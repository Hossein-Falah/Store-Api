const { Router } = require("express");
const userController = require("../controllers/user.controller");

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
router.put('/ban/:id', userController.banUser);
router.put('/unban/:id', userController.unbanUser);
router.put('/role/:id', userController.changeUserRole);

module.exports = {
    UserRoutes: router
}
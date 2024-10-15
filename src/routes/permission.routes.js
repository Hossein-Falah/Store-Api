const { Router } = require("express");
const PermissionController = require("../controllers/permission.controller");

const router = Router();

router.get(`/`, PermissionController.getAllPermissions);
router.post(`/add`, PermissionController.createPermission);
router.patch(`/update/:id`, PermissionController.updatePermission);
router.delete(`/delete/:id`, PermissionController.removePermission);

module.exports = {
    PermissionRoutes: router
}
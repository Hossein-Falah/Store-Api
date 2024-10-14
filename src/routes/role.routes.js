const { Router } = require("express");
const RoleController = require("../controllers/role.controller");

const router = Router();

router.get(`/`, RoleController.getAllRoles);
router.post(`/add`, RoleController.createRole);
router.patch(`/update/:id`, RoleController.updateRole);
router.delete(`/delete/:id`, RoleController.removeRole);

module.exports = {
    RoleRoutes: router
}
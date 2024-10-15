const { Router } = require("express");
const RoleController = require("../controllers/role.controller");
const tags = require("../middlewares/tags.middleware");

const router = Router();

router.get(`/`, RoleController.getAllRoles);
router.post(`/add`, tags("permissions"), RoleController.createRole);
router.patch(`/update/:id`, tags("permissions"), RoleController.updateRole);
router.delete(`/delete/:id`, RoleController.removeRole);

module.exports = {
    RoleRoutes: router
}
const { Router } = require("express");
const departmentController = require("../controllers/department.controller");
const subDepartmentController = require("../controllers/department-sub.controller");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");

const router = Router();

router.get(`/`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), departmentController.getAllDepartments);
router.post(`/create`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), departmentController.createDepartment);
router.put(`/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), departmentController.updateDepartment);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), departmentController.deleteDepartment);

router.get(`/sub`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), subDepartmentController.getAllSubDepartments);
router.post(`/sub/create`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), subDepartmentController.createSubDepartment);
router.put(`/sub/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), subDepartmentController.updateSubDepartment);
router.delete(`/sub/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), subDepartmentController.deleteSubDepartment);


module.exports = {
    DepartmentRoutes: router
}
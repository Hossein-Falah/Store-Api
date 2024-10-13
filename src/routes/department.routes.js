const { Router } = require("express");
const departmentController = require("../controllers/department.controller");
const subDepartmentController = require("../controllers/department-sub.controller");

const router = Router();

router.get(`/`, departmentController.getAllDepartments);
router.post(`/create`, departmentController.createDepartment);
router.put(`/update/:id`, departmentController.updateDepartment);
router.delete(`/delete/:id`, departmentController.deleteDepartment);

router.get(`/sub`, subDepartmentController.createSubDepartment);
router.post(`/sub/create`, subDepartmentController.createSubDepartment);
router.put(`/sub/update/:id`, subDepartmentController.updateSubDepartment);
router.delete(`/sub/delete/:id`, subDepartmentController.deleteSubDepartment);


module.exports = {
    DepartmentRoutes: router
}
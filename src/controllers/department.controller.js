const autoBind = require("auto-bind");
const departmentService = require("../services/department.service");

class DepartmentController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = departmentService;
    };

    async getAllDepartments(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async createDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async updateDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async deleteDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new DepartmentController();
const autoBind = require("auto-bind");
const subDepartmentService = require("../services/department-sub.service");

class SubDepartmentController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = subDepartmentService;
    };

    async getAllSubDepartments(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async createSubDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async updateSubDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async deleteSubDepartment(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new SubDepartmentController();
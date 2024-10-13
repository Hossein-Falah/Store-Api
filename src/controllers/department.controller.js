const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const departmentService = require("../services/department.service");
const { departmentValidation } = require("../validations/department.validation");

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
            const { title } = req.body;

            await departmentValidation.validateAsync({ title });

            await this.#service.createDepartment({ title });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "دپارتمان با موفقیت اضافه شد"
            });
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
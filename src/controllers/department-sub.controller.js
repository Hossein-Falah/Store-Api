const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const subDepartmentService = require("../services/department-sub.service");
const { subDepartmentValidation, departmentValidation } = require("../validations/department.validation");
const { objectIdValidation } = require("../validations/id.validation");

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
            const { title, department } = req.body;

            await subDepartmentValidation.validateAsync({ title, department });

            await this.#service.createSubDepartment({ title, department });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "فرزند دپارتمان با موفقیت اضافه شد"
            })
        } catch (error) {
            next(error);
        }
    };

    async updateSubDepartment(req, res, next) {
        try {
            const { id } = req.params;
            const { title } = req.body;

            await objectIdValidation.validateAsync({ id });
            await departmentValidation.validateAsync({ title });

            await this.#service.updateSubDepartment({ id, title });

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "فرزند دپارتمان با موفقیت ویرایش شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async deleteSubDepartment(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.deleteSubDepartment(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "فرزند دپارتمان با موفقیت حذف شد"
            })
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new SubDepartmentController();
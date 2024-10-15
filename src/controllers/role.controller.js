const autoBind = require("auto-bind");
const roleService = require("../services/role.service");
const { roleValidation } = require("../validations/RBAC.validation");
const { StatusCodes } = require("http-status-codes");
const { objectIdValidation } = require("../validations/id.validation");

class RoleController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = roleService;
    };

    async getAllRoles(req, res, next) {
        try {
            const roles = await this.#service.getAllRoles();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                roles
            })
        } catch (error) {
            next(error)
        }
    };

    async createRole(req, res, next) {
        try {            
            const { title, description, permissions } = await roleValidation.validateAsync(req.body);

            await this.#service.createRole({ title, description, permissions });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "نقش با موفقیت ایجاد شد."
            })
        } catch (error) {            
            next(error);
        }
    };

    async updateRole(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async removeRole(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.removeRole(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "نقش با موفقیت حذف شد."
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new RoleController();
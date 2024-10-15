const autoBind = require("auto-bind");
const roleService = require("../services/role.service");
const { roleValidation } = require("../validations/RBAC.validation");
const { StatusCodes } = require("http-status-codes");

class RoleController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = roleService;
    };

    async getAllRoles(req, res, next) {
        try {
            
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
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new RoleController();
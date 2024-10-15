const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const permissionService = require("../services/permission.service");
const { permissionValidation, updatePermissionValidation } = require("../validations/RBAC.validation");
const { objectIdValidation } = require("../validations/id.validation");

class PermissionController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = permissionService;
    };

    async getAllPermissions(req, res, next) {
        try {
            const permissions = await this.#service.getAllPermissions();

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                permissions
            });
        } catch (error) {
            next(error);
        }
    };

    async createPermission(req, res, next) {
        try {
            const { name, description } = await permissionValidation.validateAsync(req.body);
            
            await this.#service.createPermission({ name, description });

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "دسترسی با موفقیت ایجاد شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async updatePermission(req, res, next) {
        try {
            const { id } = req.params;

            const permissionData = await updatePermissionValidation.validateAsync(req.body);

            await this.#service.updatePermission(id, permissionData);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "به روزرسانی با موفقیت انجام شد"
            });
        } catch (error) {
            next(error);
        }
    };

    async removePermission(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            await this.#service.removePermission(id);

            return res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                message: "دسترسی با موفقیت حذف شد"
            });
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new PermissionController();
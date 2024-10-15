const autoBind = require("auto-bind");
const RoleModel = require("../models/role.model");
const createHttpError = require("http-errors");
const { deleteInvalidPropertyObject } = require("../utils/function.utils");

class RoleService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = RoleModel;
    };

    async getAllRoles() {
        const roles = await this.#model.find({});
        return roles;
    };

    async createRole({ title, description, permissions }) {
        await this.checkExistRoleWithTitle({ title });

        const newRole = await this.#model.create({ title, description, permissions });
        if (!newRole) throw new createHttpError.InternalServerError("نقش ایجاد نشد");
    };

    async updateRole(id, roleData) {
        await this.checkExistRoleById(id);
        
        deleteInvalidPropertyObject(roleData);

        const updateRole = await this.#model.updateOne({ _id: id }, { $set: roleData });
        if (!updateRole.modifiedCount) throw new createHttpError.InternalServerError("بروزرسانی نقش انجام نشد");
    }

    async removeRole(id) {
        await this.checkExistRoleById(id);

        const deleteRole = await this.#model.deleteOne({ _id: id });
        if (!deleteRole.deletedCount) throw new createHttpError.InternalServerError("حذف نقش انجام نشد");
    }

    async checkExistRoleWithTitle({ title }) {
        const role = await this.#model.findOne({ title });
        if (role) throw new createHttpError.Conflict("نقش یا رول قبلا تعریف شده")
    };

    async checkExistRoleById(id) {
        const role = await this.#model.findById(id);
        if (!role) throw new createHttpError.NotFound("نقش یافت نشد")
    };
};

module.exports = new RoleService();
const autoBind = require("auto-bind");
const RoleModel = require("../models/role.model");
const createHttpError = require("http-errors");

class RoleService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = RoleModel;
    };

    async getAllRoles() {
        
    };

    async createRole({ title, description, permissions }) {
        await this.checkExistRoleWithTitle({ title });

        const newRole = await this.#model.create({ title, description, permissions });
        if (!newRole) throw new createHttpError.InternalServerError("نقش ایجاد نشد");
    };

    async updateRole() {
        
    }

    async removeRole() {
        
    }

    async checkExistRoleWithTitle({ title }) {
        const role = await this.#model.findOne({ title });
        if (role) throw new createHttpError.Conflict("نقش یا رول قبلا تعریف شده")
    };
};

module.exports = new RoleService();
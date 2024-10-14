const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const PermissionModel = require("../models/permission.model");

class PermissionService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = PermissionModel;
    };

    async getAllPermissions() {
        const permissions = await this.#model.find({});
        return permissions;
    };

    async createPermission({ name, description }) {
        await this.checkExistPermissionWithName({ name });

        const permission = await this.#model.create({ name, description });
        if (!permission) throw new createHttpError.InternalServerError("خطا در ایجاد دسترسی");
    };

    async updatePermission() {
        
    };

    async removePermission() {
        
    };

    async checkExistPermissionWithName({ name }) {
        const permission = await this.#model.findOne({ name });
        if (permission) throw new Error("دسترسی با این عنوان قبلا ایجاد شده است");
    };
};

module.exports = new PermissionService();
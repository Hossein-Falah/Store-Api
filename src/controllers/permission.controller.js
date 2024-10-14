const autoBind = require("auto-bind");
const permissionService = require("../services/permission.service");

class PermissionController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = permissionService;
    };

    async getAllPermissions(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async createPermission(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async updatePermission(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async removePermission(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };
};

module.exports = new PermissionController();
const autoBind = require("auto-bind");
const PermissionModel = require("../models/permission.model");

class PermissionService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = PermissionModel;
    };

    async getAllPermissions() {
        
    };

    async createPermission() {
        
    };

    async updatePermission() {
        
    };

    async removePermission() {
        
    };
};

module.exports = new PermissionService();
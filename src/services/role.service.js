const autoBind = require("auto-bind");
const RoleModel = require("../models/role.model");

class RoleService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = RoleModel;
    };

    async getAllRoles() {
        
    };

    async createRole() {
        
    };

    async updateRole() {
        
    }

    async removeRole() {
        
    }
};

module.exports = new RoleService();
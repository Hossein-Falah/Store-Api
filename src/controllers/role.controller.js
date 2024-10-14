const autoBind = require("auto-bind");
const roleService = require("../services/role.service");

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
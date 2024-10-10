const autoBind = require("auto-bind");
const menuService = require("../services/menu.service");

class MenuController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = menuService;
    };

    async getAllMenus(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async createMenu(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async updateMenu(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async deleteMenu(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async getMenusForAdmin(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new MenuController();
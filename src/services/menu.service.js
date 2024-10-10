const autoBind = require("auto-bind");
const MenuModel = require("../models/menu.model");

class MenuService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = MenuModel;
    };

    async getAllMenus() {
        
    }

    async createMenu() {
        
    }

    async updateMenu() {
        
    }

    async deleteMenu() {
        
    }

    async getMenusForAdmin() {
        
    }
};

module.exports = new MenuService();
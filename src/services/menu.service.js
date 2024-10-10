const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const MenuModel = require("../models/menu.model");

class MenuService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = MenuModel;
    };

    async getAllMenus() {
        
    }

    async createMenu({ title, slug, parent }) {
        await this.checkExistWithTitle({ title });
        await this.checkExistSlug({ slug });
        
        const newMenu = await this.#model.create({ title, slug, parent });

        if (!newMenu) throw new createHttpError.InternalServerError("دسته بندی ایجاد نشد");
    }

    async updateMenu() {
        
    }

    async deleteMenu() {
        
    }

    async getMenusForAdmin() {
        
    };

    async checkExistWithTitle({ title }) {
        const existTitle = await this.#model.findOne({ title: title });
        if (existTitle) throw new createHttpError.Conflict("نام عنوان تکراری است");
    }

    async checkExistSlug({ slug }) {
        const existSlug = await this.#model.findOne({ slug: slug });
        if (existSlug) throw new createHttpError.Conflict("نام slug تکراری است");
    }
};

module.exports = new MenuService();
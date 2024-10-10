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

    async deleteMenu(id) {
        const menu = await this.checkExistById({ id });

        const resultDelete = await this.#model.deleteOne({ _id: menu._id });

        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("حذف دسته بندی انجام نشد");
    }

    async getMenusForAdmin() {
        
    };

    async checkExistById({ id }) {
        const menu = await this.#model.findById({ _id: id });
        if (!menu) throw new createHttpError.NotFound("دسته بندی وجود ندارد");
        return menu;
    }

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
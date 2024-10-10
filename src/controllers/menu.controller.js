const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const menuService = require("../services/menu.service");
const { menuValidation } = require("../validations/menu.validation");

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
            const menuData = await menuValidation.validateAsync(req.body);

            await this.#service.createMenu(menuData);

            return res.status(StatusCodes.CREATED).json({
                statusCode: StatusCodes.CREATED,
                message: "دسته بندی با موفقیت اضافه شد"
            });
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
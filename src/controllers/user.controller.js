const autoBind = require("auto-bind");
const userService = require("../services/user.service");
const { StatusCodes } = require("http-status-codes");
const { objectIdValidation } = require("../validations/id.validation");
const { userValidation } = require("../validations/user.validation");

class UserController {
    #service

    constructor() {
        autoBind(this);
        this.#service = userService;
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await this.#service.getAllUsers();

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                users
            })
        } catch (error) {
            next(error)
        }
    }

    async getUserById(req, res, next) {
        try {
            const { id } = req.params;

            const { id: userId } = await objectIdValidation.validateAsync({ id });

            const user = await this.#service.getUserById(userId);

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                user
            })
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const { username, name, email } = req.body;
            
            await objectIdValidation.validateAsync({ id });
            
            if (username && name && email) {
                await userValidation.validateAsync({ username, name, email });
            }
            
            await this.#service.updateUser({ id, username, name, email });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message: "به روزرسانی با موفقیت انجام شد",
            })
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async banUser(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async unbanUser(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async changeUserRole(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new UserController();
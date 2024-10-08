const autoBind = require("auto-bind");
const { StatusCodes } = require("http-status-codes");

const userService = require("../services/user.service");
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
            const { id } = req.params;
            const { id: userId } = await objectIdValidation.validateAsync({ id });

            await this.#service.deleteUser(userId);

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message: "کاربر با موفقیت حذف شد"
            });
        } catch (error) {
            next(error)
        }
    }

    async banUser(req, res, next) {
        try {
            const { id } = req.params;

            const { id: userId } = await objectIdValidation.validateAsync({ id });
            
            const message = await this.#service.banUser(userId);

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    }

    async unbanUser(req, res, next) {
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const message = await this.#service.unbanUser(id);

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    }

    async changeUserRole(req, res, next) {
        try {
            const { id } = req.params;
            const { role } = req.body;
            const { id: userId } = await objectIdValidation.validateAsync({ id });

            const message = await this.#service.changeUserRole({ userId, role });

            return res.status(StatusCodes.OK).json({
                statusCode : StatusCodes.OK,
                message
            })
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new UserController();
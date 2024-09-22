const autoBind = require("auto-bind");
const userService = require("../services/user.service");
const { StatusCodes } = require("http-status-codes");

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
            
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            
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
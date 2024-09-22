const autoBind = require("auto-bind");
const UserModel = require("../models/user.model");

class UserService {
    #model

    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }

    async getAllUsers() {

    }

    async getUserById() {

    }

    async createUser() {

    }

    async updateUser() {

    }

    async deleteUser() {

    }

    async banUser() {

    }

    async unbanUser() {

    }

    async changeUserRole() {
        
    }
}

module.exports = new UserService();
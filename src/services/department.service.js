const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const DepartmentModel = require("../models/department.model");

class DepartmentService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = DepartmentModel;
    };

    async getAllDepartments() {
        const departments = await this.#model.find({});

        return departments;
    }

    async createDepartment({ title }) {
        await this.checkExistWithTitle({ title });

        const newDepartment = await this.#model.create({ title });
        if (!newDepartment) throw new createHttpError.InternalServerError("دپارتمان ایجاد نشد");
    };

    async updateDepartment() {
        
    };

    async deleteDepartment() {
        
    };

    async checkExistWithTitle({ title }) {
        const existTitle = await this.#model.findOne({ title });
        if (existTitle) throw new createHttpError.Conflict("نام عنوان تکراری است");
    };
};

module.exports = new DepartmentService();
const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const SubDepartmentModel = require("../models/department-sub.model");

class SubDepartmentService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = SubDepartmentModel;
    };

    async getAllSubDepartments() {
        
    }

    async createSubDepartment({ title, department }) {
        await this.checkExistWithTitle({ title });

        const newSubDepartment = await this.#model.create({ title, department });
        if (!newSubDepartment) throw new createHttpError.InternalServerError("فرزند دپارتمان ایجاد نشد");
    };

    async updateSubDepartment() {
        
    };

    async deleteSubDepartment() {
        
    };

    async checkExistWithTitle({ title }) {
        const existTitle = await this.#model.findOne({ title });
        if (existTitle) throw new createHttpError.Conflict("نام عنوان تکراری است");
    };
};

module.exports = new SubDepartmentService();
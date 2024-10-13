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

    async updateDepartment({ id, title }) {
        await this.checkExistById({ id });
    
        const resultUpdate = await this.#model.updateOne({ _id: id }, { $set: { title } });
        if (!resultUpdate.modifiedCount) throw new createHttpError.InternalServerError("بروزرسانی دپارتمان انجام نشد");
    };

    async deleteDepartment(id) {
        await this.checkExistById({ id });

        const resultDelete = await this.#model.deleteOne({ _id: id });
        if (!resultDelete.deletedCount) throw new createHttpError.InternalServerError("حذف دپارتمان انجام نشد");
    };

    async checkExistById({ id }) {
        const department = await this.#model.findById({ _id: id });
        if (!department) throw new createHttpError.NotFound("دپارتمان وجود ندارد");
    };

    async checkExistWithTitle({ title }) {
        const existTitle = await this.#model.findOne({ title });
        if (existTitle) throw new createHttpError.Conflict("نام عنوان تکراری است");
    };
};

module.exports = new DepartmentService();
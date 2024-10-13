const autoBind = require("auto-bind");
const DepartmentModel = require("../models/department.model");

class DepartmentService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = DepartmentModel;
    };

    async getAllDepartments() {
        
    }

    async createDepartment() {
        
    };

    async updateDepartment() {
        
    };

    async deleteDepartment() {
        
    }
};

module.exports = new DepartmentService();
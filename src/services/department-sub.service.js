const autoBind = require("auto-bind");
const SubDepartmentModel = require("../models/department-sub.model");

class SubDepartmentService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = SubDepartmentModel;
    };

    async getAllSubDepartments() {
        
    }

    async createSubDepartment() {
        
    };

    async updateSubDepartment() {
        
    };

    async deleteSubDepartment() {
        
    }
};

module.exports = new SubDepartmentService();
const autoBind = require("auto-bind");
const createHttpError = require("http-errors");

const TicketModel = require("../models/ticket.model");
const DepartmentModel = require("../models/department.model");
const SubDepartmentModel = require("../models/department-sub.model");
const ProductModel = require("../models/product.model");

class TicketService {
    #model;
    #departmentModel;
    #departmentSubModel;
    #productModel;

    constructor() {
        autoBind(this);
        this.#model = TicketModel;
        this.#departmentModel = DepartmentModel;
        this.#departmentSubModel = SubDepartmentModel;
        this.#productModel = ProductModel;
    };

    async getAllTickets() {
        
    }

    async createTicket(req, ticketData) {
        const user = req?.user;
        
        const { title, body, product, priority, department, departmentSub } = ticketData;

        await this.checkExistProduct(product);
        await this.checkExistDepartment(department);
        await this.checkExistDepartmentSub(departmentSub);
        await this.checkExistTicketWithTitle({ title });

        const newTicket = await this.#model.create({
            title,
            body,
            product,
            priority,
            department,
            departmentSub,
            user: user._id,
            answer: 0,
            isAnswer: false
        });

        if (!newTicket) throw new createHttpError.InternalServerError("خطای در ارسال نظر پیش آمده مجددا تلاش کنید");
    };

    async getAllUserTickets() {
        
    };

    async answerTicket() {
        
    };

    async getAnsweredTickets() {     
           
    };

    async checkExistDepartment(id) {
        const department = await this.#departmentModel.findById({ _id: id });        
        if (!department) throw new createHttpError.NotFound("دپارتمان مورد نظر یافت نشد");
    };

    async checkExistDepartmentSub(id) {
        const departmentSub = await this.#departmentSubModel.findById({ _id: id });        
        if (!departmentSub) throw new createHttpError.NotFound("دپارتمان فرزند مورد نظر یافت نشد");
    };

    async checkExistProduct(id) {
        const product = await this.#productModel.findById({ _id: id });        
        if (!product) throw new createHttpError.NotFound("محصول مورد نظر یافت نشد");
    };

    async checkExistTicketWithTitle({ title }) {
        const ticket = await this.#model.findOne({ title });        
        if (ticket) throw new createHttpError.Conflict("نام تیکت تکراری است");
    };
};

module.exports = new TicketService();
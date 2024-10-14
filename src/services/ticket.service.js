const autoBind = require("auto-bind");
const createHttpError = require("http-errors");
const { default: mongoose } = require("mongoose");

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
        const tickets = await this.#model.aggregate([
            {
                $match: { answer: 0 }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "departments",
                    localField: "department",
                    foreignField: "_id",
                    as: "department"
                }
            },
            {
                $unwind: {
                    path: "$department",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "departmentsubs",
                    localField: "departmentSub",
                    foreignField: "_id",
                    as: "departmentSub"
                }
            },
            {
                $unwind: {
                    path: "$departmentSub",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "departmentsubs",
                    localField: "departmentSub.parent",
                    foreignField: "_id",
                    as: "departmentSub.parent"
                }
            },
            {
                $unwind: {
                    path: "$departmentSub.parent",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "tickets",
                    localField: "parent",
                    foreignField: "_id",
                    as: "parent"
                }
            },
            {
                $unwind: {
                    path: "$parent",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    "_id": 1,
                    "title": 1,
                    "body": 1,
                    "priority": 1,
                    "answer": 1,
                    "isAnswer": 1,
                    "user.name": 1,
                    "user.username": 1,
                    "user.email": 1,
                    "user.phone": 1,
                    "parent.title": 1,
                    "parent.body": 1,
                    "parent.user.name": 1,
                    "parent.user.username": 1,
                    "parent.user.email": 1,
                    "parent.user.phone": 1,
                    "department._id": 1,
                    "department.title": 1,
                    "departmentSub._id": 1,
                    "departmentSub.title": 1
                }
            }
        ]);

        return tickets;
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

    async answerTicket(req, id, body) {
        const user = req?.user;
        
        const ticket = await this.checkExistTicket(id);

        const createAnswerTicket = await this.#model.create({
            title: "پاسخ تیکت",
            body,
            department: ticket.department,
            departmentSub: ticket.departmentSub,
            user: user._id,
            priority: ticket.priority,
            answer: 0,
            isAnswer: true,
            parent: id
        });

        await this.#model.findOneAndUpdate({ _id: id }, { answer: 1 });

        if (!createAnswerTicket) throw new createHttpError.InternalServerError("خطای در ارسال نظر پیش آمده مجددا تلاش کنید");
    };

    async getAnsweredTickets(id) {     
        const ticket = await this.#model.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(id) }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: {
                    path: "$user",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "tickets",
                    localField: "parent",
                    foreignField: "_id",
                    as: "parent"
                }
            },
            {
                $unwind: {
                    path: "$parent",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "parent.user",
                    foreignField: "_id",
                    as: "parent.user"
                }
            },
            {
                $unwind: {
                    path: "$parent.user",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    "title": 1,
                    "body": 1,
                    "answer": 1,
                    "isAnswer": 1,
                    "user.name": 1,
                    "user.username": 1,
                    "user.email": 1,
                    "user.phone": 1,
                    "parent.title": 1,
                    "parent.body": 1,
                    "parent.user.name": 1,
                    "parent.user.username": 1,
                    "parent.user.email": 1,
                    "parent.user.phone": 1
                }
            }
        ]);

        return ticket;
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

    async checkExistTicket(id) {
        const ticket = await this.#model.findById({ _id: id });        
        if (!ticket) throw new createHttpError.NotFound("تیکت مورد نظر یافت نشد");
        return ticket;
    }
};

module.exports = new TicketService();
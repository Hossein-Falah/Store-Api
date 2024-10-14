const autoBind = require("auto-bind");
const ticketService = require("../services/ticket.service");
const { ticketValidation, answerValidation } = require("../validations/ticket.validation");
const { StatusCodes } = require("http-status-codes");
const { objectIdValidation } = require("../validations/id.validation");

class TicketController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = ticketService;
    };

    async getAllTickets(req, res, next) {
        try {
            const tickets = await this.#service.getAllTickets();

            return res.status(StatusCodes.OK).json({
                status: StatusCodes.OK,
                tickets
            })
        } catch (error) {
            next(error);
        }
    }

    async createTicket(req, res, next) {
        try {
            const ticketData = await ticketValidation.validateAsync(req.body);
            
            await this.#service.createTicket(req, ticketData);

            return res.status(StatusCodes.CREATED).json({
                status: StatusCodes.CREATED,
                message: "تیکت با موفقیت ایجاد شد",
            })
        } catch (error) {
            next(error);
        }
    };

    async getAllUserTickets(req, res, next) {
        try {
            const tickets = await this.#service.getAllUserTickets(req);

            return res.status(StatusCodes.OK).json({
                status: StatusCodes.OK,
                tickets
            })
        } catch (error) {
            next(error);
        }
    };

    async answerTicket(req, res, next) {
        try {
            const { id } = req.params;
            const { body } = req.body;        

            await objectIdValidation.validateAsync({ id });
            await answerValidation.validateAsync({ body });

            await this.#service.answerTicket(req, id, body);

            return res.status(StatusCodes.CREATED).json({
                status: StatusCodes.CREATED,
                message: "تیکت با موفقیت پاسخ داده شد",
            });
        } catch (error) {
            next(error);
        }
    };

    async getAnsweredTickets(req, res, next) {     
        try {
            const { id } = req.params;

            await objectIdValidation.validateAsync({ id });

            const ticket = await this.#service.getAnsweredTickets(id);

            return res.status(StatusCodes.OK).json({
                status: StatusCodes.OK,
                ticket
            });
        } catch (error) {
            next(error);
        }   
    };
};


module.exports = new TicketController();
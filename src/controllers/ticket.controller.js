const autoBind = require("auto-bind");
const ticketService = require("../services/ticket.service");
const { ticketValidation } = require("../validations/ticket.validation");
const { StatusCodes } = require("http-status-codes");

class TicketController {
    #service;

    constructor() {
        autoBind(this);
        this.#service = ticketService;
    };

    async getAllTickets(req, res, next) {
        try {
            
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
            
        } catch (error) {
            next(error);
        }
    };

    async answerTicket(req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    };

    async getAnsweredTickets(req, res, next) {     
        try {
            
        } catch (error) {
            next(error);
        }   
    };
};


module.exports = new TicketController();
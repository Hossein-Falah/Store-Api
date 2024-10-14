const autoBind = require("auto-bind");
const ticketService = require("../services/ticket.service");

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
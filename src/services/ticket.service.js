const autoBind = require("auto-bind");
const TicketModel = require("../models/ticket.model");

class TicketService {
    #model;

    constructor() {
        autoBind(this);
        this.#model = TicketModel;
    };

    async getAllTickets() {
        
    }

    async createTicket() {
        
    };

    async getAllUserTickets() {
        
    };

    async answerTicket() {
        
    };

    async getAnsweredTickets() {     
           
    };
};

module.exports = new TicketService();
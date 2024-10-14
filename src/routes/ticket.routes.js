const { Router } = require("express");
const TicketController = require("../controllers/ticket.controller");

const router = Router();

router.get(`/`, TicketController.getAllTickets);
router.post(`/create`, TicketController.createTicket);
router.get(`/user`, TicketController.getAllUserTickets);
router.post(`/answer`, TicketController.answerTicket);
router.get(`/answer/:id`, TicketController.getAnsweredTickets);

module.exports = {
    TicketRoutes: router
}
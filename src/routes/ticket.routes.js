const { Router } = require("express");
const TicketController = require("../controllers/ticket.controller");
const { authenticateToken } = require("../middlewares/guard/authorization.guard");

const router = Router();

router.get(`/`, TicketController.getAllTickets);
router.post(`/create`, authenticateToken, TicketController.createTicket);
router.get(`/user`, authenticateToken, TicketController.getAllUserTickets);
router.post(`/answer/:id`, authenticateToken, TicketController.answerTicket);
router.get(`/answer/:id`, TicketController.getAnsweredTickets);

module.exports = {
    TicketRoutes: router
}
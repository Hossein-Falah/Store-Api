const { Router } = require("express");
const TicketController = require("../controllers/ticket.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { PERMISSIONS } = require("../constants/constants");
const { checkPermission } = require("../middlewares/guard/permission.guard");

const router = Router();

router.get(`/`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), TicketController.getAllTickets);
router.post(`/create`, authenticateToken, checkPermission([PERMISSIONS.USER]) , TicketController.createTicket);
router.get(`/user`, authenticateToken, checkPermission([PERMISSIONS.USER]) , TicketController.getAllUserTickets);
router.post(`/answer/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]) , TicketController.answerTicket);
router.get(`/answer/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), TicketController.getAnsweredTickets);

module.exports = {
    TicketRoutes: router
}
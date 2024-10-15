const { Router } = require("express");
const NotificationController = require("../controllers/notification.controller");
const { authenticateToken } = require("../middlewares/guard/authenticate.guard");
const { checkPermission } = require("../middlewares/guard/permission.guard");
const { PERMISSIONS } = require("../constants/constants");

const router = Router();

router.get(`/`, NotificationController.getNotifications);
router.get(`/count`, NotificationController.getCountNotifications);
router.get(`/unseen`, NotificationController.getUnSeenNotifications);
router.get(`/seen`, NotificationController.getSeenNotifications);
router.get(`/:id`, NotificationController.getNotificationById);
router.post(`/send`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NotificationController.sendNotifications);
router.delete(`/delete/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NotificationController.deleteNotificationById);
router.delete(`/delete-all`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NotificationController.deleteAllNotifications);
router.put(`/update/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NotificationController.updateNotificationById);
router.post(`/answer/:id`, authenticateToken, checkPermission([PERMISSIONS.ADMIN]), NotificationController.answerNotificationById);
router.put(`/seen/:id`, NotificationController.seenNotificationById);
router.put(`/seen-all`, NotificationController.seenAllNotifications);

module.exports = {
    NotificationRoutes: router
}
const { Router } = require("express");
const NotificationController = require("../controllers/notification.controller");

const router = Router();

router.get(`/`, NotificationController.getNotifications);
router.get(`/count`, NotificationController.getCountNotifications);
router.get(`/unseen`, NotificationController.getUnSeenNotifications);
router.get(`/seen`, NotificationController.getSeenNotifications);
router.get(`/:id`, NotificationController.getNotificationById);
router.post(`/send`, NotificationController.sendNotifications);
router.delete(`/delete/:id`, NotificationController.deleteNotificationById);
router.delete(`/delete-all`, NotificationController.deleteAllNotifications);
router.put(`/update/:id`, NotificationController.updateNotificationById);
router.post(`/answer/:id`, NotificationController.answerNotificationById);
router.put(`/seen/:id`, NotificationController.seenNotificationById);
router.put(`/seen-all`, NotificationController.seenAllNotifications);

module.exports = {
    NotificationRoutes: router
}
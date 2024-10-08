/**
 * @swagger
 *  components:
 *      schemas:
 *          Notification:
 *              type: object
 *              required:
 *                  -   message
 *              properties:
 *                  message:
 *                      type: string
 *                      description: notification message
 *                  admin:
 *                      type: string
 *                      description: notification admin
 *          UpdateNotification:
 *              type: object
 *              required:
 *                  -   message
 *              properties:
 *                  message:
 *                      type: string
 *                      description: notification message
 *          AnswerNotification:
 *              type: object
 *              required:
 *                  -   answer
 *              properties:
 *                  answer:
 *                      type: string
 *                      description: notification answer
 *                  message:
 *                      type: string
 *                      description: notification message
 */

/**
 * @swagger
 *  /notifications:
 *      get:
 *          tags: [Notification]
 *          summary: get all notifications
 *          responses:
 *              200:
 *                  description: get all notifications
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/{id}:
 *      get:
 *          tags: [Notification]
 *          summary: get notification
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/send:
 *      post:
 *          tags: [Notification]
 *          summary: send notification
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Notification'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Notification'
 *          responses:
 *              201:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/delete/{id}:
 *      delete:
 *          tags: [Notification]
 *          summary: delete notification
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/delete-all:
 *      delete:
 *          tags: [Notification]
 *          summary: delete all notifications
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/update/{id}:
 *      put:
 *          tags: [Notification]
 *          summary: update notification
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateNotification'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateNotification'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/answer/{id}:
 *      post:
 *          tags: [Notification]
 *          summary: answer notification
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AnswerNotification'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AnswerNotification'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/seen/{id}:
 *      put:
 *          tags: [Notification]
 *          summary: seen notification
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /notifications/seen-all:
 *      put:
 *          tags: [Notification]
 *          summary: seen all notifications
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /count:
 *      get:
 *          tags: [Notification]
 *          summary: get notification count
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
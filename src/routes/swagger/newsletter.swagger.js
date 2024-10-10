/**
 * @swagger
 *  components:
 *      schemas:
 *          Newsletter:
 *              type: object
 *              required:
 *                  - email
 *              properties:
 *                  email:
 *                      type: string
 *                      description: email of the newsletter
 */

/**
 * @swagger
 *  /newsletter:
 *      get:
 *          summary: get all newsletters
 *          tags: [NewsLetter]
 *          responses:
 *              200:
 *                  description: get all newsletters
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /newsletter/{id}:
 *      get:
 *          summary: get newsletter
 *          tags: [NewsLetter]
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: get newsletter
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /newsletter/subscribe:
 *      post:
 *          summary: subscribe newsletter
 *          tags: [NewsLetter]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Newsletter'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Newsletter'
 *          responses:
 *              201:
 *                  description: subscribe newsletter
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /newsletter/unsubscribe:
 *      post:
 *          summary: unsubscribe newsletter
 *          tags: [NewsLetter]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Newsletter'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Newsletter'
 *          responses:
 *              201:
 *                  description: unsubscribe newsletter
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /newsletter/send:
 *      post:
 *          summary: send newsletter
 *          tags: [NewsLetter]
 *          responses:
 *              201:
 *                  description: send newsletter
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
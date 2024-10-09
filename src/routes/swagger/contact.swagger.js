/**
 * @swagger
 *  components:
 *      schemas:
 *          Contact:
 *              type: object
 *              required:
 *                  -   name
 *                  -   email
 *                  -   phone
 *                  -   message
 *              properties:
 *                  name:
 *                      type: string
 *                      description: name of the contact
 *                  email:
 *                      type: string
 *                      description: email of the contact
 *                  phone:
 *                      type: string
 *                      description: phone of the contact
 *                  message:
 *                      type: string
 *                      description: message of the contact
 *          Answer:
 *              type: object
 *              required:
 *                  -   subject
 *                  -   message
 *              properties:
 *                  subject:
 *                      type: string
 *                      description: subject of the contact
 *                  message:
 *                      type: string
 *                      description: message of the contact
 */

/**
 * @swagger
 *  /contact:
 *      get:
 *          tags: [Contact]
 *          summary: get all contact
 *          responses:
 *              200:
 *                  description: get all contact
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /contact/{id}:
 *      get:
 *          tags: [Contact]
 *          summary: get contact
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: get contact
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /contact/send:
 *      post:
 *          tags: [Contact]
 *          summary: send contact
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Contact"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/Contact"
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
 *  /contact/update/{id}:
 *      put:
 *          tags: [Contact]
 *          summary: update contact
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Contact"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/Contact"
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
 *  /contact/delete/{id}:
 *      delete:
 *          tags: [Contact]
 *          summary: delete contact
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
 *  /contact/answer:
 *      post:
 *          tags: [Contact]
 *          summary: answer contact
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Answer"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/Answer"
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
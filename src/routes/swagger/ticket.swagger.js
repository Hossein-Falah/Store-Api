/**
 * @swagger
 *  components:
 *      schemas:
 *          Ticket:
 *              type: object
 *              required:
 *                  -   title
 *                  -   body
 *                  -   priority
 *                  -   department
 *                  -   departmentSub
 *              properties:
 *                  title:
 *                      type: string
 *                      description: The title of the ticket
 *                  body:
 *                      type: string
 *                      description: The description of the ticket
 *                  priority:
 *                      type: number
 *                      description: The priority of the ticket
 *                  product:
 *                      type: string
 *                      description: The product of the ticket
 *                  department:
 *                      type: string
 *                      description: The department of the ticket
 *                  departmentSub:
 *                      type: string
 *                      description: The sub-department of the ticket
 * 
 *          Answer-Ticket:
 *              type: object
 *              required:
 *                  -   body
 *              properties:
 *                  body:
 *                      type: string
 *                      description: The description of the answer
 */

/**
 * @swagger
 *  /ticket:
 *      get:
 *          tags: [Ticket]
 *          summary: get ticket
 *          responses:
 *              200:
 *                  description: get ticket
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /ticket/create:
 *      post:
 *          tags: [Ticket]
 *          summary: create ticket
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Ticket'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Ticket'
 *          responses:
 *              200:
 *                  description: create ticket
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /ticket/user:
 *      get:
 *          tags: [Ticket]
 *          summary: get all user tickets
 *          responses:
 *              200:
 *                  description: get all user tickets
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /ticket/answer/{id}:
 *      post:
 *          tags: [Ticket]
 *          summary: answer ticket
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
 *                          $ref: '#/components/schemas/Answer-Ticket'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Answer-Ticket'
 *          responses:
 *              200:
 *                  description: answer ticket
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /ticket/answer/{id}:
 *      get:
 *          tags: [Ticket]
 *          summary: get answered tickets
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: get answered tickets
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          Department:
 *              type: object
 *              required:
 *                  -   title
 *              properties:
 *                  title:
 *                      type: string
 *                      description: department title
 *          Sub-Department:
 *              type: object
 *              required:
 *                  -   title
 *                  -   department
 *              properties:
 *                  title:
 *                      type: string
 *                      description: sub-department title
 *                  department:
 *                      type: string
 *                      description: sub-department department
 */

/**
 * @swagger
 *  /department:
 *      get:
 *          tags: [Department]
 *          summary: get department
 *          responses:
 *              200:
 *                  description: get department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /department/create:
 *      post:
 *          tags: [Department]
 *          summary: create department
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *          responses:
 *              201:
 *                  description: create department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error   
 */

/**
 * @swagger
 *  /department/update/{id}:
 *      put:
 *          tags: [Department]
 *          summary: update department
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *          responses:
 *              200:
 *                  description: create department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error   
 */

/**
 * @swagger
 *  /department/delete/{id}:
 *      delete:
 *          tags: [Department]
 *          summary: delete department
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
 *  /department/sub:
 *      get:
 *          tags: [Department]
 *          summary: get sub department
 *          responses:
 *              200:
 *                  description: get sub department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /department/sub/create:
 *      post:
 *          tags: [Department]
 *          summary: create sub department
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Sub-Department'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Sub-Department'
 *          responses:
 *              201:
 *                  description: create sub department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /department/sub/update/{id}:
 *      put:
 *          tags: [Department]
 *          summary: update sub department
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Department'
 *          responses:
 *              200:
 *                  description: update sub department
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /department/sub/delete/{id}:
 *      delete:
 *          tags: [Department]
 *          summary: delete sub department
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
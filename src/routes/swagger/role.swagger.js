/**
 * @swagger
 *  components:
 *      schemas:
 *          Role:
 *              type: object
 *              required:
 *                  -   name
 *                  -   description
 *              properties:
 *                  name:
 *                      type: string
 *                      description: the username for signup
 *                  description:
 *                      type: string
 *                      description: role description
 *                  permissions:
 *                      type: array
 *                      description: role permissions
 *                      items:
 *                          type: string
 *          UpdateRole:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: the username for signup
 *                  description:
 *                      type: string
 *                      description: role description
 *                  permissions:
 *                      type: array
 *                      description: role permissions
 */

/**
 * @swagger
 *  /role:
 *      get:
 *          tags: [RBAC 👤]
 *          summary: get all roles
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /role/add:
 *      post:
 *          tags: [RBAC 👤]
 *          summary: add role
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Role'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Role'
 *          responses:
 *              201:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /role/update/{id}:
 *      patch:
 *          tags: [RBAC 👤]
 *          summary: update role
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateRole'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateRole'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /role/delete/{id}:
 *      delete:
 *          tags: [RBAC 👤]
 *          summary: delete role
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad request
 *              500:
 *                  description: server error
 */
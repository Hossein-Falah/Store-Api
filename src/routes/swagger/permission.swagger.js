/**
 * @swagger
 *  components:
 *      schemas:
 *          permission:
 *              type: object
 *              required:
 *                  -   name
 *                  -   description
 *              properties:
 *                  name:
 *                      type: string
 *                      description: the username for permission
 *                  description:
 *                      type: string
 *                      description: the description for permission
 *          UpdatePermission:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: the username for signup
 *                  description:
 *                      type: string
 *                      description: the description for signup
 */

/**
 * @swagger
 *  /permission:
 *      get:
 *          tags: [RBAC 👤]
 *          summary: get all permissions
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
 *  /permission/add:
 *      post:
 *          tags: [RBAC 👤]
 *          summary: add permission
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/permission"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/permission"
 *          responses:
 *              201:
 *                  description: add permission
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /permission/update/{id}:
 *      patch:
 *          tags: [RBAC 👤]
 *          summary: update permission
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdatePermission"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdatePermission"
 *          responses:
 *              200:
 *                  description: update permission
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /permission/delete/{id}:
 *      delete:
 *          tags: [RBAC 👤]
 *          summary: delete permission
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: delete permission
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
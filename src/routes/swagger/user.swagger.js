/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: string
 *                  username:
 *                      type: string
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  role:
 *                      type: string
 *                  createdAt:
 *                      type: string
 *          Update-User:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  role:
 *                      type: string
 *          Update-Role:
 *              type: object
 *              properties:
 *                  role:
 *                      type: string
 */

/**
 * @swagger
 *  /user:
 *      get:
 *          tags: [User]
 *          summary: get all users
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 *  /user/{id}:
 *      get:
 *          tags: [User]
 *          summary: get user by id
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 *  /user/create:
 *      post:
 *          tags: [User]
 *          summary: create user
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
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
 *  /user/update/{id}:
 *      patch:
 *          tags: [User]
 *          summary: update user
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string 
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-User'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-User'
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
 *  /user/delete/{id}:
 *      delete:
 *          tags: [User]
 *          summary: delete user
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
 *  /user/ban/{id}:
 *      put:
 *          tags: [User]
 *          summary: ban user
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
 *  /user/unban/{id}:
 *      put:
 *          tags: [User]
 *          summary: unban user
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
 *  /user/role/{id}:
 *      put:
 *          tags: [User]
 *          summary: update user role
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-Role'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Update-Role'
 *          responses:
 *              200:
 *                  description: success
 */
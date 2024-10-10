/**
 * @swagger
 *  components:
 *      schemas:
 *          Menu:
 *              type: object
 *              required:
 *                  -   title
 *                  -   slug
 *              properties:
 *                  title:
 *                      type: string
 *                      description: menu title
 *                  slug:
 *                      type: string
 *                      description: menu slug
 *                  parent:
 *                      type: string
 *                      description: menu parent
 */

/**
 * @swagger
 *  /menu:
 *      get:
 *          tags: [Menu]
 *          summary: get menu
 *          responses:
 *              200:
 *                  description: get menu
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /menu/all:
 *      get:
 *          tags: [Menu]
 *          summary: get all menu
 *          responses:
 *              200:
 *                  description: get all menu
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /menu/create:
 *      post:
 *          tags: [Menu]
 *          summary: create menu
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Menu'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Menu'
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
 *  /menu/update/{id}:
 *      put:
 *          tags: [Menu]
 *          summary: update menu
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Menu'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Menu'
 *          responses:
 *              200:
 *                  description: update menu
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /menu/delete/{id}:
 *      delete:
 *          tags: [Menu]
 *          summary: delete menu
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
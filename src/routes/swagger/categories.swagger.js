/**
 * @swagger
 *  components:
 *      schemas:
 *          Category:
 *              type: object
 *              required:
 *                  -   name
 *              properties:
 *                  name:
 *                      type: string
 *                      description: category name
 *                  parent:
 *                      type: string
 *                      description: category parent
 */

/**
 * @swagger
 *  /categories:
 *      get:
 *          tags: [Category]
 *          summary: get all categories
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /categories/{id}:
 *      get:
 *          tags: [Category]
 *          summary: get category by id
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /categories/create:
 *      post:
 *          tags: [Category]
 *          summary: create category
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /categories/update/{id}:
 *      patch:
 *          tags: [Category]
 *          summary: update category
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *          responses:
 *              200:
 *                  description: success
 */

/**
 * @swagger
 *  /categories/delete/{id}:
 *      delete:
 *          tags: [Category]
 *          summary: delete category
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /categories/parents:
 *      get:
 *          tags: [Category]
 *          summary: get all parents
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /categories/children/{id}:
 *      get:
 *          tags: [Category]
 *          summary: get children by id
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */
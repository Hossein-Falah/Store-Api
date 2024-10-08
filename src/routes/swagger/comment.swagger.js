/**
 * @swagger
 *  components:
 *      schemas:
 *          Comment:
 *              type: object
 *              required:
 *                  -   comment
 *                  -   blog
 *                  -   score
 *              properties:
 *                  comment:
 *                      type: string
 *                      description: comment name
 *                  blog:
 *                      type: string
 *                      description: comment blog
 *                  score:
 *                      type: number
 *                      description: comment score
 *          UpdateComment:
 *              type: object
 *              required:
 *                  -   comment
 *              properties:
 *                  comment:
 *                      type: string
 *                      description: comment comment
 *          AnswerComment:
 *              type: object
 *              required:
 *                  -   comment
 *                  -   score
 *              properties:
 *                  comment:
 *                      type: string
 *                      description: comment name
 *                  score:
 *                      type: number
 *                      description: comment score
 */

/**
 * @swagger
 *  /comments:
 *      get:
 *          tags: [Comment]
 *          summary: get comments
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
 *  /comments/comment/{id}:
 *      get:
 *          tags: [Comment]
 *          summary: get comment
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
 *  /comments/create:
 *      post:
 *          tags: [Comment]
 *          summary: create comment
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comment'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Comment'
 *          responses:
 *              201:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /comments/update/{id}:
 *      put:
 *          tags: [Comment]
 *          summary: update comment
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateComment'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateComment'
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /comments/delete/{id}:
 *      delete:
 *          tags: [Comment]
 *          summary: delete comment
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
 *  /comments/accept/{id}:
 *      put:
 *          tags: [Comment]
 *          summary: accept comment
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
 *  /comments/reject/{id}:
 *      put:
 *          tags: [Comment]
 *          summary: reject comment
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
 *  /comments/answer/{id}:
 *      post:
 *          tags: [Comment]
 *          summary: answer comment
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AnswerComment'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/AnswerComment'
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /comments/likes:
 *      get:
 *          tags: [Comment]
 *          summary: get comment likes
 *          responses:
 *              200:
 *                  description: success
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /comments/like/{id}:
 *      put:
 *          tags: [Comment]
 *          summary: like comment
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
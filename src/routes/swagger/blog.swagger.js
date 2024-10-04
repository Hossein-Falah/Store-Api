/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateBlog:
 *              type: object
 *              required:
 *                  -   title
 *                  -   description
 *                  -   content
 *                  -   image
 *                  -   slug
 *                  -   category
 *                  -   tags
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title for blog
 *                  description:
 *                      type: string
 *                      description: the description for blog
 *                  content:
 *                      type: string
 *                      description: the content for blog
 *                  image:
 *                      type: file
 *                      description: the image for blog
 *                  slug:
 *                      type: string
 *                      description: the slug for blog
 *                  category:
 *                      type: string
 *                      description: the category for blog
 *                  tags:
 *                      type: array
 *                      description: the tags for blog
 *          UpdateBlog:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      description: the title for blog
 *                  description:
 *                      type: string
 *                      description: the description for blog
 *                  content:
 *                      type: string
 *                      description: the content for blog
 *                  image:
 *                      type: string
 *                      description: the image for blog
 *                  slug:
 *                      type: string
 *                      description: the slug for blog
 *                  category:
 *                      type: string
 *                      description: the category for blog
 *                  tags:
 *                      type: array
 *                      description: the tags for blog
 *          CreateComment:
 *              type: object
 *              required:
 *                  -   content
 *              properties:
 *                  blogId:
 *                      type: string
 *                      description: the blogId for comment
 *                  content:
 *                      type: string
 *                      description: the content for blog
 *                  reply:
 *                      type: string
 *                      description: the reply for blog
 */

/**
 * @swagger
 *  /blogs:
 *      get:
 *          tags: [Blog]
 *          summary: get all blogs
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
 *  /blogs/{id}:
 *      get:
 *          tags: [Blog]
 *          summary: get blog
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
 *  /blogs/create:
 *      post:
 *          tags: [Blog]
 *          summary: create blog
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/CreateBlog'
 *          responses:
 *              201:
 *                  description: blog create successfully
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /blogs/update/{id}:
 *      put:
 *          tags: [Blog]
 *          summary: update blog
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateBlog'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/UpdateBlog'
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
 *  /blogs/delete/{id}:
 *      delete:
 *          tags: [Blog]
 *          summary: delete blog
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
 *  /blogs/{id}/like:
 *      put:
 *          tags: [Blog]
 *          summary: like blog
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
 *  /blogs/{id}/bookmark:
 *      put:
 *          tags: [Blog]
 *          summary: bookmark blog
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
 *  /blogs/{id}/comment:
 *      get:
 *          tags: [Blog]
 *          summary: get comments
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
 *  /blogs/{id}/comment:
 *      post:
 *          tags: [Blog]
 *          summary: create comment
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comment'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Comment'
 *          responses:
 *              200:
 *                  description: success
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
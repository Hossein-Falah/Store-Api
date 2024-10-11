/**
 * @swagger
 *  components:
 *      schemas:
 *          Product:
 *              type: object
 *              required:
 *                  - title
 *                  - description
 *                  - content
 *                  - images
 *                  - category
 *                  - slug
 *                  - status
 *              properties:
 *                  title:
 *                      type: string
 *                      description: product title
 *                  description:
 *                      type: string
 *                      description: product description
 *                  content:
 *                      type: string
 *                      description: product content
 *                  images:
 *                      type: array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  category:
 *                      type: string
 *                      description: product category
 *                  slug:
 *                      type: string
 *                      description: product slug
 *                  tags:
 *                      type: array
 *                      description: product tags
 *                  price:
 *                      type: number
 *                      description: product price
 *                  discount:
 *                      type: number
 *                      description: product discount
 *                  quantity:
 *                      type: number
 *                      description: product quantity
 *                  status:
 *                      type: string
 *                      description: product status
 */

/**
 * @swagger
 *  /products:
 *      get:
 *          tags: [Product]
 *          summary: get products
 *          responses:
 *              200:
 *                  description: get products
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /products/{id}:
 *      get:
 *          tags: [Product]
 *          summary: get product
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          responses:
 *              200:
 *                  description: get product
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /products/create:
 *      post:
 *          tags: [Product]
 *          summary: create product
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
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
 *  /products/update/{id}:
 *      patch:
 *          tags: [Product]
 *          summary: update product
 *          parameters:
 *              - in: path
 *                required: true
 *                name: id
 *                type: string
 *          requestBody:
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
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
 *  /products/delete/{id}:
 *      delete:
 *          tags: [Product]
 *          summary: delete product
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
 *  /products/like/{id}:
 *      put:
 *          tags: [Product]
 *          summary: like product
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
 *  /products/bookmark/{id}:
 *      put:
 *          tags: [Product]
 *          summary: bookmark product
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
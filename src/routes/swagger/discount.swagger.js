/**
 * @swagger
 *  components:
 *      schemas:
 *          Discount:
 *              type: object
 *              required:
 *                  -   code
 *                  -   percent
 *                  -   product
 *                  -   max
 *              properties:
 *                  code:
 *                      type: string
 *                      description: discount code
 *                  percent:
 *                      type: number
 *                      description: discount percent
 *                  product:
 *                      type: string
 *                      description: discount product
 *                  max:
 *                      type: number
 *                      description: discount max
 *          UpdateDiscount:
 *              type: object
 *              required:
 *                  -   code
 *              properties:
 *                  code:
 *                      type: string
 *                      description: discount code
 *                  percent:
 *                      type: number
 *                      description: discount percent
 *                  max:
 *                      type: number
 *                      description: discount max
 *          UsesDiscount:
 *              type: object
 *              properties:
 *                  product:
 *                      type: string
 *                      description: discount product
 *          SetDiscount:
 *              type: object
 *              properties:
 *                  discount:
 *                      type: number
 *                      description: discount
 */

/**
 * @swagger
 *  /discount:
 *      get:
 *          tags: [Discount]
 *          summary: get discount
 *          responses:
 *              200:
 *                  description: get discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/{code}:
 *      post:
 *          tags: [Discount]
 *          summary: get discount
 *          parameters:
 *              - in: path
 *                required: true
 *                name: code
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UsesDiscount"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UsesDiscount"
 *          responses:
 *              201:
 *                  description: get discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/create:
 *      post:
 *          tags: [Discount]
 *          summary: create discount
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Discount"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/Discount"
 *          responses:
 *              201:
 *                  description: create discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/update/{discountID}:
 *      put:
 *          tags: [Discount]
 *          summary: update discount
 *          parameters:
 *              - in: path
 *                required: true
 *                name: discountID
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateDiscount"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/UpdateDiscount"
 *          responses:
 *              200:
 *                  description: update discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/one/{discountID}: 
 *      put:
 *          tags: [Discount]
 *          summary: update discount
 *          parameters:
 *              - in: path
 *                required: true
 *                name: discountID
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/SetDiscount"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/SetDiscount"
 *          responses:
 *              200:
 *                  description: update discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/delete/{discountID}:
 *      delete:
 *          tags: [Discount]
 *          summary: delete discount
 *          parameters:
 *              - in: path
 *                required: true
 *                name: discountID
 *                type: string
 *          responses:
 *              200:
 *                  description: delete discount
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/all:
 *      put:
 *          tags: [Discount]
 *          summary: set all discounts
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/SetDiscount"
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: "#/components/schemas/SetDiscount"
 *          responses:
 *              200:
 *                  description: set all discounts
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /discount/all:
 *      delete:
 *          tags: [Discount]
 *          summary: delete all discounts
 *          responses:
 *              200:
 *                  description: delete all discounts
 *              400:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
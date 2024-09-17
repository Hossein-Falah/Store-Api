/**
 * @swagger
 *  components:
 *      schemas:
 *          SignUp:
 *              type: object
 *              required:
 *                  -   username
 *                  -   email
 *                  -   password
 *              properties:
 *                  username:
 *                      type: string
 *                      description: the username for signup
 *                  name:
 *                      type: string
 *                      description: the username for signup
 *                  email:
 *                      type: string
 *                      description: the email for signup
 *                  password:
 *                      type: string
 *                      description: the password for signup
 *                  phone:
 *                      type: string
 *                      description: the username for signup   
 *          Login:
 *              type: object
 *              required:
 *                  -   email
 *                  -   password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: the email for login
 *                  password:
 *                      type: string
 *                      description: the password for login
 *          RefreshToken:
 *              type: object
 *              required:
 *                  -   refreshToken
 *              properties:
 *                  refreshToken:
 *                      type: string
 *                      description: the refresh token
 *          ForgetPassword:
 *              type: object
 *              required:
 *                  -   email
 *              properties:
 *                  email:
 *                      type: string
 *                      description: the email for ForgetPassword
 *          ResetPassword:
 *              type: object
 *              required:
 *                  -   token
 *                  -   password
 *              properties:
 *                  token:
 *                      type: string
 *                      description: the token for ResetPassword
 *                  password:
 *                      type: string
 *                      description: the password for ResetPassword
 */

/**
 * @swagger
 *  /auth/signup:
 *      post:
 *          tags: [Auth 🔒]
 *          summary: signup user with username, email, password
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/SignUp'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/SignUp'
 *          responses:
 *              201:
 *                  description: The User Registered SuccessFully :))
 *              401:
 *                  description: The User Already Registered With Email Or Usersname
 *              403:
 *                  description: The User Phone Was Banned
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /auth/login:
 *      post:
 *          tags: [Auth 🔒]
 *          summary: login user with email, password
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Login'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/Login'
 *          responses:
 *              200:
 *                  description: success
 *              401:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /auth/refresh-token:
 *      post:
 *          tags: [Auth 🔒]
 *          summary: refresh token
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/RefreshToken'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/RefreshToken'
 *          responses:
 *              200:
 *                  description: success
 *              401:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /auth/forget-password:
 *      post:
 *          tags: [Auth 🔒]
 *          summary: forget password
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ForgetPassword'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/ForgetPassword'
 *          responses:
 *              200:
 *                  description: success
 *              401:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /auth/reset-password/{token}:
 *      post:
 *          tags: [Auth 🔒]
 *          summary: reset password
 *          parameters:
 *              - in: path
 *                required: true
 *                name: token
 *                type: string
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ResetPassword'
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/ResetPassword'
 *          responses:
 *              200:
 *                  description: success
 *              401:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */

/**
 * @swagger
 *  /auth/me:
 *      get:
 *          tags: [Auth 🔒]
 *          summary: get me
 *          responses:
 *              200:
 *                  description: success
 *              401:
 *                  description: bad Request
 *              500:
 *                  description: server error
 */
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = swaggerUI.setup(
    swaggerJsdoc({
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: "Store API",
                version: "1.0.0",
                description: "the ecommerce api",
                contact: {
                    name: "Hossein Falah",
                    email: "hosseinfalah2021@gmail.com"
                }
            },
            servers: [
                { url: process.env.BASE_URL}
            ],
            components: {
                securitySchemes: {
                    BearerAuth : {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                }
            },
            security: [{ BearerAuth: [] }]
        },
        apis: ['./src/routes/swagger/*.js']
    }),
    { explorer: true }
);

module.exports = swaggerOptions
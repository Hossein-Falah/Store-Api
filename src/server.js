const http = require('http')
const cors = require('cors');
require("dotenv").config();
const morgan = require('morgan');
const express = require('express');
const createHttpError = require('http-errors');
const swaggerUi = require('swagger-ui-express');

const ConnectToDB = require('./configs/db.config');
const { AllRoutes } = require('./routes/index.routes');
const swaggerOptions = require('./configs/swagger.config');

class Application {
    #app = express();
    #MONGO_URL
    #PORT;

    constructor(PORT, MONGO_URL) {
        this.#PORT = PORT;
        this.#MONGO_URL = MONGO_URL;
        
        const db = new ConnectToDB(this.#MONGO_URL);

        this.configApplication();
        this.createServer();
        db.connect();
        this.createRoutes();
        this.errorHandling();
    };

    configApplication() {
        this.#app.use(morgan('dev'));
        this.#app.use(cors());
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(express.static('public'));
        this.#app.use('/api-document', swaggerUi.serve, swaggerOptions)
    }

    createServer() {
        const server = http.createServer(this.#app);
        server.listen(this.#PORT, () => {
            console.log(`✅ Server is running on Url: http://localhost:${this.#PORT}`);
        });
    }

    createRoutes() {
        this.#app.use(AllRoutes)
    }

    errorHandling() {
        this.#app.use((req, res, next) => {
            next(createHttpError.NotFound("آدرس مورد نظر یافت نشد"));
        });

        this.#app.use((error, req, res, next) => {
            const serverError = createHttpError.InternalServerError();
            const statusCode = error.status || serverError.status;
            const message = error.message || serverError.message;
            return res.status(statusCode).json({
                statusCode,
                errors: {
                    message
                }
            })
        })
    }
}

module.exports = {
    Application
}
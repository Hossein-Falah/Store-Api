const { Application } = require("./src/server");

new Application(process.env.PORT, process.env.MONGO_URL);

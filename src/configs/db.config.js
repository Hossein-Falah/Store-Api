const { default: mongoose } = require("mongoose");

class ConnectToDB {
    #MONGO_URL

    constructor(MONGO_URL) {
        this.#MONGO_URL = MONGO_URL;
    }
    
    async connect() {
        mongoose.connect(this.#MONGO_URL);

        mongoose.connection.on('connected', () => {
            console.log(`✅ MongoDB Connected to database: ${this.#MONGO_URL}`);
        })

        mongoose.connection.on('disconnected', () => {
            console.log(`❌ MongoDB Disconnected from database: ${this.#MONGO_URL}`);
        })

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            process.exit(0);
        })
    }
}

module.exports = ConnectToDB
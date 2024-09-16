const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        min: [6, 'username must be at least 6 characters'],
        max: [20, 'username must be less than 20 characters']
    },
    name: { 
        type: String, 
        min: [6, 'username must be at least 6 characters'], 
        max: [20, 'username must be less than 20 characters']
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true 
    },
    password: { 
        type: String, 
        required: true, 
        min: [8, 'password must be at least 6 characters'],
        max: [20, 'password must be less than 20 characters']
    },
    phone: { 
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },
    refreshToken: { 
        type: String, 
        required: true, 
        unique: true 
    },
}, {
    timestamps: true
})

UserSchema.index({ username: "text"}, { email: "text" }, {name: "text"}, {phone: "text"});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
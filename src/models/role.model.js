const { Schema, default: mongoose } = require("mongoose");

const RoleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    permissions: {
        type: [mongoose.Types.ObjectId],
        ref: "permission",
        default: []
    }
}, {
    toJSON: {
        virtuals: true
    }
});

const RoleModel = mongoose.model("role", RoleSchema);

module.exports = RoleModel;
const { Schema, default: mongoose } = require("mongoose");

const PermissionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        default: ""
    }
}, {
    toJSON: {
        virtuals: true
    }
});

const PermissionModel = mongoose.model("permission", PermissionSchema);

module.exports = PermissionModel;
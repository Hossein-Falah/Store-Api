const { Schema, default: mongoose } = require("mongoose");

const Department = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const DepartmentModel = mongoose.model("department", Department);

module.exports = DepartmentModel;
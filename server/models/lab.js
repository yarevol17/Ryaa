const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
    name: { type: String, require: true },
    professor: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ],
    students: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ]
});


module.exports = mongoose.model("Lab", labSchema)
const mongoose = require("mongoose");

const majorSchema = new mongoose.Schema({
    name: { type: String, require: true },
    skills: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Skill" }
    ],
    subjects: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Subject"}
    ],
    students: [
        {type: mongoose.Schema.Types.ObjectId, ref: "User" }
    ]
});

module.exports = mongoose.model("Major", majorSchema)
const mongoose = require("mongoose");

const yearSchema = new mongoose.Schema({
    name: { type: String, require: true },
    classes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Class" }
    ]
});




module.exports = mongoose.model("Year", yearSchema)
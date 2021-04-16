const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ratingSchema = new mongoose.Schema({
    user: { type: String },
    author: { type: String },
    ability: { type: Number, require: true },
    responsibility: { type: Number, require: true },
    discipline: { type: Number, require: true },
    dynamic: { type: Number, require: true },
    keen: { type: Number, require: true },
    total: { type: Number, require: true },
    comment: { type: String, require: true },

});

ratingSchema.plugin(uniqueValidator);


module.exports = mongoose.model("Rating", ratingSchema)
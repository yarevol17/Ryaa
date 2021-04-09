const Subject = require("../models/subject");
const Major = require("../models/major");
const mongoose = require("mongoose");
const { find } = require("../models/subject");

exports.createSubject = (req, res, next) => {
    const subject = new Subject({
        name: req.body.name
    })

    subject.save().then(
    subject => {
        console.log(subject);
        res.status(201).json({ _id: subject._id });
    }, 
    err => {
        console.log(err);
        res.status(500).json({ msg: "loi" })
    })
}



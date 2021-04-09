// const year = require("../models/year");
const Year = require("../models/year")
exports.createYear = (req, res, next) => {
    const year = new Year({
        name: req.body.name
    })

    year.save().then(
    year => {
        console.log(year);
        res.status(201).json({ _id: year._id });
    }, 
    err => {
        console.log(err);
        res.status(500).json({ msg: "loi" })
    })
}

exports.getYear = (req, res, next) => {
    Year.find().then(
        year => {
            console.log(year);
            res.status(200).json(year);
        }, 
        err => {
            console.log(err);
            res.status(500).json({ msg: "loi" })
        })
}
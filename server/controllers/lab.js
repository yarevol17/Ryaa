const Lab = require("../models/lab")
exports.createLab = (req, res, next) => {
    const lab = new Lab({
        name: req.body.name
    })

    lab.save().then(lab => {
        console.log(lab);
        res.status(201).json({ _id: lab._id });
    }, err => {
        console.log(err);
        res.status(500).json({ msg: "loi" })
    })
}

exports.getLabs = (req, res, next) => {
    Lab.find().then(
        lab => {
            console.log(lab);
            res.status(200).json(lab);
        }, 
        err => {
            console.log(err);
            res.status(500).json({ msg: "loi" })
        })
}
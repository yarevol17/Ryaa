const Rate = require("../models/rating");
const mongoose = require("mongoose");

exports.rate = (req, res, next) => {
    const author_id = req.params.author_id
    const total = (req.body.ability + req.body.discipline + req.body.dynamic + req.body.keen + req.body.responsibility)/5

    const rate = new Rate({
        user: req.body.user,
        author: author_id,
        ability: req.body.ability,
    responsibility: req.body.responsibility,
    discipline: req.body.discipline,
    dynamic: req.body.dynamic,
    keen: req.body.keen,
    total: total,
    comment: req.body.comment,
    })

    rate.save().then(
        (rate) => {
          return res.status(201).json({ msg: "Rate thành công" });
        },
        (err) => {
          return res.status(500).json(err);
        }
      );
}


exports.getRateByUser = (req, res, next) => {
  const user_id = req.params.user_id;

  Rate.find({user: user_id}).then(rates => {
    console.log(rates)
    return res.status(200).json(rates)
  }, err => {
    return res.status(500).json(err)
  })
}

const User = require("../models/user")

exports.createUser = (req, res, next) => {
       const user = req.params.author_id


    user.save().then(user => console.log(user), err => console.log(err))
}
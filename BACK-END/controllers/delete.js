const User = require('../models/user');

module.exports = (req, res, next) => {

    const userId = req.params.id;

    User.destroy({where: {id: userId}})
    .then( (user) => {
        res.json(user);
    })
    .catch(err => console.log(err));
}
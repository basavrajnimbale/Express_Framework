const User = require('../models/user');

exports.postUser = (req, res, next) => {
    console.log(req.body, 'controller');
    const name = req.body.username;
    const phone = req.body.phone;
    const mail = req.body.email;
    console.log(name, mail)
    User.create({
        username: name,
        email: mail,
        phone: phone
    })
        .then((rep) => { console.log(rep); res.json(rep); })
        .catch(err => console.log(err));
}

exports.getUsers = (req, res, next) => {

    User.findAll()
        .then((r) => res.json(r))
        .catch(err => console.log(err));
}

/*exports.getUser = (req,res,next) => {
    const userId = req.params.id;
    const query = req.query.edit;
    console.log(userId, query,'getEdit');
    if(query === undefined){
        User.findAll({where: {id: userId}})
        .then(r => res.json(r[0].dataValues))
        .catch(err => console.log(err));
    }
}

/*exports.postEdit = (req, res, next) => {

    let id = req.body.id;
    const updatedName = req.body.username;
    const updatedMail = req.body.email;
    const updatedPhone = req.body.phone;
    console.log(req.body);

    User.findOne({where: {id: id}, raw: false})
    .then(r => {
        // console.log(r.dataValues, 'before edit');
        r.dataValues.username = updatedName;
        r.dataValues.email = updatedMail;
        r.dataValues.phone = updatedPhone;
        // console.log(r.dataValues,'after edit');
         return r.save();
    })
    .then(() => res.redirect('/get-users'))
    .catch(err => console.log(err));
}*/
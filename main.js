const express = require('express');

const app = express();

const bodyParser = require('body-parser');


const cors = require('cors');

const sequelize = require('./util/database');
const userRoute = require('./routes/post');
const deleteRoute = require('./routes/deleteUser');
const User = require('./models/user');
User.sync();

app.use(cors());

app.use(bodyParser.json({ extended: false }));

/*app.post('/add-user', (req, res, next) => {
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
})*/

app.use(userRoute);
app.use('/user', deleteRoute);

sequelize.sync()
    .then((r) => {
        app.listen(3000)
    })
    .catch(err => console.log(err));

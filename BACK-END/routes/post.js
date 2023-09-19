const express = require('express');

const route = express.Router();

const controller = require('../controllers/user');

route.post('/add-user', controller.postUser);

route.get('/get-users', controller.getUsers);

//route.get('/edit-user/:id', controller.getUser);

//route.post('/edit-user', controller.postEdit);

module.exports = route;
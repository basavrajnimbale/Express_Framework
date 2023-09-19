const express = require('express');

const route = express.Router();

const controller = require('../controllers/delete');

route.get('/delete-user/:id', controller);

module.exports = route;
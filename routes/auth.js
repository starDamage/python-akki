const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const login = require('../controllers/login');

const route = express.Router();

route.post('/signup',login.userSignUp);
route.post('/login',login.userLogin);
// route.use('/',login.AdminloginPage);

module.exports = route;
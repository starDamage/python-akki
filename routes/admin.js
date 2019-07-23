const express = require('express');
const path = require('path');


const rootDir = require('../utils/path');

const productController = require('../controllers/products');
const login = require('../controllers/login');
const route = express.Router();

route.post('/product',productController.addProduct);
route.get('/delete-product',productController.delProduct);
route.post('/productupdate',productController.updateProductCon);
route.use('/dashboard',productController.dashboardPage);
route.use('/add-product',productController.getAllProductPage);
route.use('/list-all-products',productController.listAllProduct);



module.exports = route;
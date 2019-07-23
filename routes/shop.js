const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const products = require('../controllers/products');
const shop = require('../controllers/shopController');
const cart = require('../controllers/cartController');

const route = express.Router();

route.get('/about',shop.about);
route.get('/checkout',cart.getchekout);
route.get('/placeorder',cart.getplaceorder);
route.get('/contact',shop.contact)
route.get('/products',shop.getProducts);
route.get('/category',shop.getProductsCategory);
route.get('/shop/:productID',shop.getProductId);
route.post('/cart',shop.addTOCartController);
route.get('/',products.homepage);

module.exports = route;

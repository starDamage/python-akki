
const path = require('path');
const db = require('../utils/database');
const rootpath = require('../utils/path');

module.exports = class Shop { 

    fatchAllProduct(){
      return db.execute('SELECT * FROM products');
     }
}
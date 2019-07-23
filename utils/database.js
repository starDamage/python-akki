const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db ;
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost/shop')
    .then(client => {
        _db = client.db();
        callback();
      }
    )
   .catch(err => {
        console.log(err);
    
    })

  };
// mongodb+srv://akki:akj123@cluster0-prjwc.mongodb.net/shop?retryWrites=true&w=majority
  const getDb = () => {
   if (_db){
       return _db;
   }
   throw 'No database Found!'; 
  };
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
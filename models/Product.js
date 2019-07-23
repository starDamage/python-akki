const getDb = require('../utils/database').getDb;
var ObjectId = require('mongodb').ObjectID;

const path = require('path');




const getAllProducts = (ch) => {

 


}

module.exports = class Product {

  constructor(body){
    this.pName = body.pName;
    this.pCategoty =body.pCategory;
    this.pPrice =body.pPrice;
    this.pDescription =body.pDescription;
    this.pImage = body.pImage;
    this.pManifacturing = body.pManifacturing;
  }
  
  save(){
    const db = getDb();
      return db.collection('products').insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
        
      });

      }

  static fetchAllProduct( ){

   const db = getDb();
   return db.collection('products').find()
   .toArray()
   .then(result => {
    return result;
     
   })
   .catch(err => {
  console.log(err);
  
   });
   
  };

  static getProductById(proid) {
    const db = getDb();
    return db
    .collection('products')
    .find({"_id":ObjectId(proid)})
    .toArray()
    .then( result =>{

      return result;
    })
    .catch( err => {
   console.log(err);
   
    })
  }

  static updateProduct(body,proid) {
    console.log(body);
    console.log(proid);
    const db = getDb();

     return db
     .collection('products')
     .updateOne({"_id" : ObjectId(proid)},
       { $set: {"pName":body.pName,"pCategoty":body.pCategoty,"pPrice":body.pPrice,"pDescription":body.pDescription,"pImage":body.pImage,"pManifacturing":body.pManifacturing}})
     .then( result => {
        
     })
     .catch( err =>{
      console.log(err);
     })

  }

static delProductModel(pid) {
  const db = getDb();   
  console.log(pid);
   
 return db.
 collection('products')
 .deleteOne({"_id" : ObjectId(pid)})
 .then( result => {
   console.log('Product is deleted!');
 })
 .catch( err => {
   console.log(err);
   
 });

  }


}
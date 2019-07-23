const getDb = require('../utils/database').getDb;
var ObjectId = require('mongodb').ObjectID;

const path = require('path');





module.exports = class User {

 constructor(body) {
     this.firstName = body.firstName;
     this.secondName = body.secondName;
     this.email = body.email;
     this.username =body.username;
     this.password = body.password; 
 }

  postSingUpUser (body){
     const db = getDb();
    return db.collection('users')
    .insertOne(this)
    .then(ch =>{
        return ch;
    })
    .catch(err => {
        console.log(err);
        
    })
 };

static getLogin (body) {
   const db = getDb();
return  db.collection('users')
          .findOne({"username": body.username,"password":body.password})
          .then( ch =>{ 
              return ch;
         })
   .catch(err => {
       console.log(err);
       
   })

};



};
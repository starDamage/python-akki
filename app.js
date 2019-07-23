
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);


const rootDir = require('./utils/path');
const store = new mongoDbStore({
    uri:'mongodb://localhost/shop',
    collection: 'sessions',

});

const bodyparser = require('body-parser');
const mogoConnect = require('./utils/database').mongoConnect;

//for routing 
const adminRoute = require('./routes/admin');
const shopRoute  = require('./routes/shop');
const authRoute = require('./routes/auth');

const shopController = require('./controllers/shopController');



const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(rootDir,'public')));
app.use(session({secret:'this is the hash methode',
 resave: false,
 saveUninitialized:false,
 store:store
}));

//for view EJS engine

app.set('view engine','ejs');
app.set('views','views',);

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(authRoute);


app.use(shopController.NotFoundPage);

mogoConnect( ( ) => {

 app.listen(3000);


})
 





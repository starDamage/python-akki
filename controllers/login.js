const User = require('../models/users');
const Product =require('../models/Product');

exports.AdminloginPage = (req,res,next) => {
  res.render('login/admin-login');
}

exports.userLogin = (req,res,next) =>
{
  
  let userdata =[] ;
  User.getLogin(req.body)
  .then( result => {
    if(!result){
      res.render('/');
    }
    req.Islogin = true;
    return Product.fetchAllProduct();
      }
  )
  .then(result1 => {

    console.log(userdata);
    req.session.Islogin = true;
    res.render('shop/shop',
    {
      pageTitle: 'Raghuvir Sweets',
     prods :result1,
     userData :userdata,
     IsAuthenticate :req.session.Islogin
     });

})
  .catch(err => {
    console.log(err);
    
  })
  


}

exports.userSignUp = ( req,res,next)=> {

  const user = new User(req.body);
  user.postSingUpUser(req.body)
 .then( cb => {
  return Product.fetchAllProduct();
 })
 .then(result1 => {
  res.render('shop/shop',
  {pageTitle: 'Raghuvir Sweets',
   prods :result1
   });

})
 .catch(err=> {
   console.log(err); 
 })

}
   
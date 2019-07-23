const products = require('../models/Product');
const Cart = require('../models/cart');


exports.about = (req,res,next) => {
   res.render('shop/about',{pageTitle: 'About Us'});
};

exports.addTOCartController = (req,res,next) => {
  const productID = req.body.productid;
  products.getProductById(productID , product => {
     Cart.addToCart(productID,product.pPrice);
  });
  res.render('shop/cart',
  {
     pageTitle:'cart',
  } 
  );
};



exports.contact = (req,res,next) => {
res.render('shop/contact',{pageTitle: 'contact'});

};

exports.getProducts = (req,res,next) => {
   products.fetchAllProduct()
   .then(result => {
      res.render('shop/products',
      {
         pageTitle: 'Products',
         prods:result,
         IsAuthenticate :req.Islogin
      });

   })
   .catch( err => {
      console.log(err);
      
   });
   
};
exports.getProductId = (req,res,next) => {
 const pid = req.params.productID;
 products.getProductById(pid)
 .then( product => {

   res.render('shop/product-details',
   {pageTitle: 'product Details',
   prod: product,
   IsAuthenticate :req.Islogin

 });
 })
 .catch(err => {
    console.log(err);
    
 });
};


exports.NotFoundPage = (req,res,next) => {
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'));
    res.render('shop/404',{pageTitle: '404Page not found'});
 };

 exports.getProductsCategory = (req,res,next ) => {
  products.fetchAllProduct((products) => {

   res.render('shop/category',
   {
      pageTitle:'Catergory',
      prods: products,
      IsAuthenticate :req.Islogin
   });
  });
 

 };
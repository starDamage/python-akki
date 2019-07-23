const Product = require('../models/Product');
const swal = require('sweetalert');

exports.getAllProductPage = (req,res,next) => {
    
    const editMode = req.query.productid;
    const productID = req.query.productid;
    console.log(editMode);
    
    if (editMode) {
        Product.getProductById(productID)
        .then(result => {
             console.log(result);
            res.render(
                'admin/admin-add-edit-products',
                { 
                    pageTitle: 'Edit Product',
                    prods:result[0]
                }
                );

        })
        .catch( err =>{
            console.log(err);
            
        });
        

    } else {
        
        res.render(
            'admin/admin-add-edit-products',
            { 
                pageTitle: 'Add Product'
            }
            );

    }
   
};

exports.delProduct = (req,res,next) => {
 const pid = req.query.pid;
 Product.delProductModel(pid)
 .then( ch => {
     console.log('product delete');
    return Product.fetchAllProduct( );
 })
 .then( row => {

    res.render('admin/list-all-products',{
        pageTitle:'list All Products',
        prods:row
    });

})
 .catch(err => {
     console.log(err);
     
 });
       





}

exports.updateProductCon = (req,res,next) => {
const productID =req.body._id;
Product.updateProduct(req.body,productID)
.then( cb => {
    return Product.fetchAllProduct()
})
.then( row => {

    res.render('admin/list-all-products',{
        pageTitle:'list All Products',
        prods:row
    });

})
.catch(err => {
    console.log(err);
    
})

  

};

exports.dashboardPage = (req,res,next) => {

    res.render(
        'admin/dashbord',
        {pageTitle: 'Admin DashBoard'}
        );
   
};

exports.addProduct = (req,res,next) => {
    console.log(res.body);   
     const product = new Product(req.body);
     product.save(this)
     .then(ch => {
        res.render('admin/admin-add-edit-products',
        {
            pageTitle: 'Add Product',
            
        }
);
     })
     .catch( err => {
         console.log(err);
         
     }); 
     

    
};

exports.listAllProduct = (req,res,next) => {
    Product.fetchAllProduct( )
    .then( row => {
        console.log(row);
        
        res.render('admin/list-all-products',{
            pageTitle:'list All Products',
            prods:row,
            userData:"no"
        });

    })
    .catch(err => {
        console.log(err);
        
    });
 
    

};
exports.homepage = (req,res,next) => {
    req.Islogin = false;
    Product.fetchAllProduct()
    .then(result => {
        res.render('shop/shop',
        {pageTitle: 'Raghuvir Sweets',
         prods :result,
         userData:"no",
         IsAuthenticate: req.Islogin
         });

    })
    .catch(err => {
        console.log(err);
        
    });
  
};

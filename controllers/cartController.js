exports.getchekout = (req,res,next) => {
res.render('shop/checkout',{pageTitle: 'Chekout'});
}


exports.getplaceorder = (req,res,next) => {
    res.render('shop/placeorder',{pageTitle:'Placeorder'});
}
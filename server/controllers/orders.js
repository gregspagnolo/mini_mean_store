var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Customer = mongoose.model('Customer');
var User = mongoose.model('User');
module.exports = function () {
	return {
		index: function(req, res) {
			Order.find({})
			.populate('product')
			.populate('customer')
			.populate('user')
			.exec(function(err, records) {
				if(err) {return res.json(false);}
				else {return res.json(records);}
			});
		},
		destroy: function(req, res) {
			Order.remove({_id:req.params.id}, function(err) {
				if(err) {return res.json(false);}
				else { return res.json(true);}
			});
		},
		create: function(req, res) {
			Customer.findById(req.body._customer, function(err, customer){
				Product.findById(req.body._product, function(err, product) {
					User.findById(req.body._user, function(err, user) {

					if(product.qty >= req.body.qty) {
					Product.findOneAndUpdate({_id: req.body._product}, {$inc: {qty: -req.body.qty }}, function(err) {
					var newStuff = new Order({
						customer: customer._id,
						product: product._id,
						user: req.body.user,
						qty: req.body.qty
					});
					newStuff.save(function(err, records) {
						if (err) {res.json(err);}
						else {res.json(records);}
						console.log(records);
					});
				});
				} else {
					return res.json(false);
				}
			});
		});
	});
}
};
}();

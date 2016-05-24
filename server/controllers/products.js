var Product = mongoose.model('Product');
module.exports =  {
		index: function(req, res) {
			Product.find({}, function(err, products) {
				if(err) {return res.json(false);}
				else { return res.json(products);}
			});
		},
		create: function(req, res) {
			var ProductInstance = new Product({
				name: req.body.name,
				url: req.body.url,
				description: req.body.description,
				qty: req.body.qty
			});
			ProductInstance.save(function(err, product) {
				if(err){return res.json(false);}
				else {return res.json(product);}
			});
	}
};
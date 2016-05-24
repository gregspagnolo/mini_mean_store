var Customer = mongoose.model('Customer');
module.exports = 
		{
		index: function(req, res) {
			Customer.find({}, function(err, records) {
				if(err){return res.json(false);}
				else {return res.json(records);}
			});
		},
		create: function(req, res) {
			var customerInstance = new Customer({
				name: req.body.name
			});
			customerInstance.save(function(err, customer) {
				if(err){return res.json(false);}
				else {return res.json(customer);}
			});
		},
		destroy: function(req, res) {
			Customer.remove({_id:req.params.id}, function(err) {
				if(err) {return res.json(false);}
				else { return res.json(true);}
			});
		},
		update: function(req, res) {
			Customer.findOneAndUpdate({_id:req.params.id}, {$set: {name: req.body.name}}, {new: true}, function(err, customer) {
				if(err) {return res.json(false);}
				else {return res.json(true);}
			});
		},
		show: function(req, res) {
			Customer.findById(req.params.id, function(err, customer) {
				if(err) {return res.json(false);}
				else {return res.json(customer);}
			});
		}
	};

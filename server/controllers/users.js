var User = mongoose.model('User');
module.exports = (function() {
	return {
		index: function(req, res) {
			User.find({}, function(err, records) {
				if(err){return res.json(false);}
				else {return res.json(records);}
			});
		},
		create: function(req, res) {
			var userInstance = new User({
				name: req.body.name
			});
			userInstance.save(function(err, user) {
				if(err){return res.json(false);}
				else {return res.json(user);}
			});
		},
	};
})();
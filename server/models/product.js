var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: {type: String},
	url: {type: String},
	description: {type: String},
	qty: {type: Number },
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

mongoose.model('Product', ProductSchema);
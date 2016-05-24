var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
	product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	qty: {type: Number},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

mongoose.model('Order', OrderSchema);
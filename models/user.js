// Load required packages
var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	}
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

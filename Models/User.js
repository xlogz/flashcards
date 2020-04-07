const mongoose = require('mongoose');
const { Schema } = mongoose;

const crypto = require('crypto');

const UserSchema = new Schema({
	fullname: String,
	username: String,
	email: String,
	password: String,
	createdon: Date
});

UserSchema.methods.setPassword = function(password){
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

UserSchema.methods.validatePassword = function(password){
	var hashCheck = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
	return hashCheck === this.hash;
}


module.exports = mongoose.model('User', UserSchema);

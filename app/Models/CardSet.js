const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSet = new Schema({
	name: String,
	createdon: Date,
	owner: { type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'},
    category: [String],
    folder: String  
			});

module.exports = mongoose.model('CardSet', CardSet);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSet = new Schema({
	title: String,
	createdon: Date,
	userId: { type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'},
    category: [String],
    folderId: String,
    highScore: Number,
    fields: [Object] 
			});

module.exports = mongoose.model('CardSet', CardSet);
const mongoose = require('mongoose');

const { Schema } = mongoose;

FolderSchema = new Schema({
	name: String,
	createdon: Date,
	owner: { type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'}
});

module.exports = mongoose.model('Folder', FolderSchema)
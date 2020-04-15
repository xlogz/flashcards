const mongoose = require('mongoose');

const { Schema } = mongoose;

FolderSchema = new Schema({
	title: String,
	createdon: Date,
	userId: { type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'}
});

FolderSchema.methods.updateTitle = title =>{
	this.title = title;
}

module.exports = mongoose.model('Folder', FolderSchema)
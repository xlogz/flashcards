const mongoose = require('mongoose');

const { Schema } = mongoose;

FavoriteSchema = new Schema({
	cardSetId: { type: mongoose.Schema.Types.ObjectId,
			 		ref: 'CardSet'
    			},
	createdon: Date,
	userId: { type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'}
});

FavoriteSchema.methods.updateTitle = title =>{
	this.title = title;
}

module.exports = mongoose.model('Favorite', FavoriteSchema)
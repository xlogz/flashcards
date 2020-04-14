const controller = {};
const mongoose = require('mongoose');
const CardSet = mongoose.model('CardSet');

controller.newCardSet = function(req, res){
	var data = req.body;
	data.date = new Date();
	data.folder = 'Sports';
	data.owner = 'userId';
	console.log(data);
	const cardSet = new CardSet();
	cardSet.save();
	res.status(200).send('Card Set has successfully been created');
}


module.exports = controller;
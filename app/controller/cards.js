const controller = {};
const mongoose = require('mongoose');
const CardSet = mongoose.model('CardSet');
const Folder = mongoose.model('Folder');

controller.newCardSet = (req, res) =>{
	const data = req.body;
	data.date = new Date();
	data.folder = 'Sports';
	data.owner = 'userId';
	console.log(data);
	const cardSet = new CardSet(data);
	cardSet.save();
	res.status(200).send('Card Set has successfully been created');
}

controller.newCardFolder = (req, res) =>{
	const data = req.body;
	data.date = new Date();
	const folder = new Folder(data);
	folder.save();
	res.status(200).send('Folder has successfully been created');
}

controller.fetchFolders = (req, res) =>{
	const userId = req.body.userId;

	Folder.find({userId: userId}).then(results=>{
		if(results){
			res.status(200).send(results);
		}
	})
}

controller.deleteCardFolder = (req, res) =>{
	const folderId = req.body.folderId;
	Folder.deleteOne({_id: folderId}).then(result=>{
		res.status(200).send(result);
	})

}

module.exports = controller;
const controller = {};
const mongoose = require('mongoose');
const CardSet = mongoose.model('CardSet');
const Folder = mongoose.model('Folder');

controller.newCardSet = (req, res) =>{
	const data = req.body;
	data.date = new Date();
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
	console.log(req.body.userId)
	Folder.find({userId: userId}).then(results=>{
		if(results){
			res.status(200).send(results);
		}
	})
}

controller.fetchCardsforFolder = (req,res) => {
	console.log('fetching cardsets for folder');
	console.log(req.body);

	CardSet.find({folderId: req.body.folderId}).then(results => {
		console.log('this is the result')
		console.log(results);
		if(results){
			return results;
			res.send(results);
		}else{
			res.send('Could not find folder');
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
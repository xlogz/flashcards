const controller = {};
const mongoose = require('mongoose');
const CardSet = mongoose.model('CardSet');
const Folder = mongoose.model('Folder');
const Favorite = mongoose.model('Favorite');


controller.newCardSet = (req, res) =>{
	const data = req.body;
	data.date = new Date();
	data.folderId = req.body.folderId;
	console.log(data);
	const cardSet = new CardSet(data);
	cardSet.save();
	res.status(200).send('Card Set has successfully been created');
}

controller.newCardFolder = (req, res) =>{
	console.log('this is adding new folder');
	const data = req.body;
	console.log(req.body);
	data.date = new Date();
	const folder = new Folder(data);
	folder.save();
	res.status(200).send('Folder has successfully been created');
}

controller.fetchFolders = (req, res) =>{
	const userId = req.headers.userid;
	Folder.find({userId: userId}).then(results=>{
		console.log('this is fetchifn folders function');
		console.log(results);
		if(results){
			res.status(200).send(results);
		}
	})
}

controller.fetchCards = (req, res) =>{
	console.log('is for folder?')
	console.log(req.headers.hasOwnProperty("folderid"))

		console.log('is for card?')
	console.log(req.headers.hasOwnProperty("cardid"))
	console.log(req.headers);
	if(req.headers.hasOwnProperty('folderid')){
		CardSet.find({folderId: req.headers.folderid}).then(results=>{
		console.log('results for searching up cardset for user');
		console.log(results);
		if(results){
			res.status(200).send(results);
		}
		})
	}else if(req.headers.hasOwnProperty('userid')){
		CardSet.find({userId: req.headers.userid}).then(results=>{
		console.log('results for searching up cardset for user');
		console.log(results);
		if(results){
			res.status(200).send(results);
		}
		})
	}
	
}

controller.deleteCardFolder = (req, res) =>{
	console.log(req.body);
	const folderId = req.body.folderId;
	Folder.deleteOne({_id: folderId}).then(result=>{
		console.log(result);
		res.status(200).send(result);
	})

}

controller.fetchCardData = (req, res) => {
	CardSet.find({_id: req.headers.cardid}).then(results=>{
		res.status(200).send(results[0]);
	})
}

controller.fetchUserFavorites = (req, res) =>{
	Favorite.find({userId: req.headers.userid}).then(results =>{
		res.status(200).send(results[0]);
	})
}

controller.addUserFavorite = (req, res) =>{
	console.log(req.body);
	console.log('adding user favorite')
	const favorite = new Favorite({cardSetId: req.body.cardSetId, userId: req.body.userId})
	favorite.save();
	res.status(200).send(favorite);
}


controller.deleteUserFavorite = (req, res) =>{
	console.log('deleting ' + req.headers.cardsetid + ' by user ' + req.headers.userid);
	console.log(req.headers);
	Favorite.deleteOne({$and:[{cardSetId: req.headers.cardsetid},{userId: req.headers.userid}]}).then(result=>{
		console.log(result);
		res.status(200).send(result);
	});
}

controller.checkUserFavorite = (req, res ) => {
	console.log('this is checkuserfavorite body');
	console.log(req.body);
	console.log('looking up card set ' + req.body.cardSetId + 'and user ' + req.body.userId)
	Favorite.find({$and:[{cardSetId: req.body.cardSetId}, {userId: req.body.userId}]}).then(result => {
		console.log('result of user favorite');
		console.log(result);
		console.log(result[0] !== undefined);
		if(result[0] !== undefined){
			res.status(200).send(true);
		}else{
			res.status(200).send(false)
		}
	})
}



module.exports = controller;
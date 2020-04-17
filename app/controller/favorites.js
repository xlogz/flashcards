const controller = {};
const mongoose = require('mongoose');
const Favorite = mongoose.model('Favorite');

controller.fetchUserFavorites = (req, res) =>{
	console.log('looking up user favorites');
	let results;
	Favorite.find({userId: req.headers.userid}).populate("cardSetId").exec((err,cardsets) =>{
			if(err){
				console.log('an error occured when fetching user favorites');
				res.status(500).send(err);
			}else{
				console.log('found this for user favorites');
				results = cardsets.map((cardset)=>{
				return cardset.cardSetId
			})
		}

		console.log(results);
		res.status(200).send(results);
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

const controller = {};
const mongoose = require('mongoose');
const User = mongoose.model("User");


controller.signUp = function( req, res){
	let errors = {}
	res.status = 200;
	console.log("Checking if user exists");
	User.find({username: req.body.username}).then( user => {

		if(user[0]){
			console.log("Username already taken");
			errors.usernameError = "The username has already been taken";
		}


		User.find({email: req.body.email}).then(user => {
			if(user[0]){
				console.log("Email has been taken");
				errors.emailError = "The email has already been taken";
			}
			if(Object.keys(errors).length > 0){
				console.log("There are errors, can't create account");
				res.send(errors);
			}else{
				console.log("No username found. Creating new account");
				let user = new User(req.body);
				user.setPassword(req.body.password);
				user.save();
				res.send(user);
			}
		

		})

			
	})
}

controller.signIn = function(req, res){
	let errors = {};
	let results = {};
	User.find({username: req.body.username}).then(user => {
		if(user[0]){
			const correctPassword = user[0].validatePassword(req.body.password);
			console.log('Correct password: ' + correctPassword);
			results.validPassword = correctPassword
			res.send(results);
		}else{
			console.log('User could not be found');
			errors.noUsername = true;
			res.send(errors);
		}
		
	})
}	


module.exports = controller;
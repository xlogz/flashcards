
const controller = {};
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Token = mongoose.model("Token");
const jwt = require('jsonwebtoken')



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
			if(correctPassword){
				const payload = {user: req.body.username};
				const options = {expiresIn: '2d'}
				const secret = process.env.JWT_SECRET;
				const token = jwt.sign(payload, secret, options);
				results.token = token;
				results.username = req.body.username;
				results.userId = user[0]._id;

				Token.findOneAndUpdate({username: req.body.username}, {hashedToken: token}).
				then((result)=>{
					if(result){
						res.send(results);
					}else{

					const dbToken = new Token({username: req.body.username, hashedToken: token, userid: user[0]._id});
						dbToken.save(function(err,result){
							if(err){
								console.log('there was an error adding token to db');
								console.log(err);
							}else{
								console.log('dbtoken and username saved successfully');
								dbToken.
								res.send(results);
							}
						});
					}
				})
				
			}
			
		}else{
			console.log('User could not be found');
			errors.noUsername = true;
			res.send(errors);
		}
		
	})
}	

controller.obtainUserFromToken = (req, res) =>{
	let results = {};
	console.log('this is the token that was passed in: ' + req.body.token);
	if(req.body.token === undefined){
		res.send(undefined);
	}
	console.log(req.body);
	Token.find({token: req.body.token}).then(user => {
		if(user){
			console.log('this is the name of the user: ' + user);
			results.username = user[0].username;
			results.userId = user[0].userid;
	 		res.send(results)
		}else{
			results.error = "Cannot find user by token";
			res.send(results)
		}
		
	 });
}


module.exports = controller;
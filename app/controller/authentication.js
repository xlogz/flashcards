
let controller = {};

controller.signUp = function( req, res){
	console.log('hello');
	res.status = 200;
	res.send("Worked");
}




module.exports = controller;
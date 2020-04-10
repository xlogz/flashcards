const authentication = require('../controller/authentication.js');

const routes = function(app){
	app.route( '/user/signup' ).post(authentication.signUp)
	app.route( '/user/login' ).put(authentication.signIn)
}

module.exports=routes;
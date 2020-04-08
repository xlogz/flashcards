const authentication = require('../controller/authentication.js');

const routes = function(app){
	app.route( '/user/signup' ).post( authentication.signUp )
}

module.exports=routes;
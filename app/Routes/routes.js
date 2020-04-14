const authentication = require('../controller/authentication.js');
const cards = require('../controller/cards.js');

const routes = function(app){
	app.route( '/user/signup' ).post(authentication.signUp)
	app.route( '/user/login' ).put(authentication.signIn)
	app.route( '/user/token' ).put(authentication.obtainUserFromToken)

	app.route( '/cards/newSet' ).post(cards.newCardSet);
}

module.exports=routes;
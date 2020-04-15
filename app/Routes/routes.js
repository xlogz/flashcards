const authentication = require('../controller/authentication.js');
const cards = require('../controller/cards.js');

const routes = function(app){
	app.route( '/user/signup' ).post(authentication.signUp)
	app.route( '/user/login' ).put(authentication.signIn)
	app.route( '/user/token' ).put(authentication.obtainUserFromToken)

	app.route( '/cards/newset' ).post(cards.newCardSet);
	app.route( '/cards/newfolder' ).post(cards.newCardFolder);
	app.route( '/cards/folders' ).get(cards.fetchFolders);
	app.route( '/cards/folders' ).delete(cards.deleteCardFolder);
}

module.exports=routes;
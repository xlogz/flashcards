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
	app.route( '/cards/set' ).get(cards.fetchCards);
	app.route( '/cards/:cardid' ).get(cards.fetchCardData);
	app.route( '/cards/favorite' ).get(cards.fetchUserFavorites)
	app.route( '/cards/favorite' ).put(cards.addUserFavorite)
	app.route( '/cards/favorite' ).delete(cards.deleteUserFavorite)
	app.route( '/cards/checkfavorite' ).put(cards.checkUserFavorite)
}

module.exports=routes;
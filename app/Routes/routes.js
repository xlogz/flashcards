const authentication = require('../controller/authentication.js');
const cards = require('../controller/cards.js');
const favorites = require('../controller/favorites.js');

const routes = function(app){
	app.route( '/user/signup' ).post(authentication.signUp)
	app.route( '/user/login' ).put(authentication.signIn)
	app.route( '/user/token' ).get(authentication.obtainUserFromToken)

	app.route( '/cards/newset' ).post(cards.newCardSet);
	app.route( '/cards/newfolder' ).post(cards.newCardFolder);
	app.route( '/cards/folders' ).get(cards.fetchFolders);
	app.route( '/cards/folders' ).delete(cards.deleteCardFolder);
	app.route( '/cards/set' ).get(cards.fetchCards);
	app.route( '/cards/:cardid' ).get(cards.fetchCardData);

	app.route( '/favorites/add' ).put(favorites.addUserFavorite);
	app.route( '/favorites/delete' ).delete(favorites.deleteUserFavorite);
	app.route( '/favorites/set' ).get(favorites.fetchUserFavorites);
	app.route( '/favorites/check' ).put(favorites.checkUserFavorite);

	app.route( '/search/').get(cards.searchCards);
}

module.exports=routes;
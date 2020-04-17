import React from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';


class Favorites extends React.Component{
render(){
	return(<div className="container">
				<CardsContainer
					currentFolderId={this.props.currentFolderId}
    				userId={this.props.userId}
    				cards={this.props.cards} 
    			/></div> )
}
}

export default Favorites;
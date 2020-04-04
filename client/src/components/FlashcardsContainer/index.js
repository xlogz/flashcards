import React from 'react';
import './styles.css'
import CardsContainer from '../CardsContainer';

class FlashcardsContainer extends React.Component{
	render(){
		return(
			<div className="flashcards-container">
				<div className="container">
					<div>
					Sports<CardsContainer category="sports"/></div>

					<div>
					Science<CardsContainer category="science"/></div>

					<div>
					Cooking<CardsContainer category="cooking"/></div>
				</div>


			</div>
			)
	}
}

export default FlashcardsContainer;
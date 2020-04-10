import React from 'react';
import './styles.css'
import CardsContainer from '../CardsContainer';

class FlashcardsContainer extends React.Component{
	render(){
		return(
			<div className="flashcards-container">
				<div className="container">
					<div className="flashcard-category">

					<div className="flashcard-category-title">
						Sports
					</div>
					<CardsContainer category="sports"/></div>

					<div className="flashcard-category">
					<div className="flashcard-category-title">
						Science
					</div>
					<CardsContainer category="science"/></div>

					<div className="flashcard-category">
					<div className="flashcard-category-title">
						Cooking
					</div><CardsContainer category="cooking"/></div>
				</div>


			</div>
			)
	}
}

export default FlashcardsContainer;
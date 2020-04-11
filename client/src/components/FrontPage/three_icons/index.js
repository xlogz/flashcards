import React from 'react';
import './styles.css'

export default function ThreeIcons(props){
	return (
		<div className="three-icons-container">
			<div className="three-icons-content">
				<div className="three-icons-left-column">
					<img src="/images/stack_of_cards.png"/>
				</div>
				<div className="three-icons-right-column">
					<div className="three-icons-items-container">
						<div className="three-icons-item">
							<div className="three-icons-icon">
								<img src="/images/flashcard_icon.png" width="100" height="100"/>
							</div>
							<div className="three-icons-text">
								<b>Keep all your flashcards</b><br/>
								in one place. Quizme helps <br/>
								you organize all your<br/>
								study material<br/>
							</div>
						</div>

						<div className="three-icons-item">
							<div className="three-icons-icon">
								<img src="/images/brain_icon.png"  width="100" height="100"/>
							</div>
							<div className="three-icons-text">
								<b>Memorize better</b><br/>
								using our typing quiz approach<br/>
								to help make the <br/>definitions stick
							</div>
						</div>

						<div className="three-icons-item">
							<div className="three-icons-icon">
								<img src="/images/book_icon.png"  width="100" height="100"/>
							</div>
							<div className="three-icons-text">
								<b>Learn and study </b><br/>
								any other subject you like <br/>
								by searching our user-generated <br/>
								content <br/>
							</div>
						</div>
					</div>
				</div>

				
			</div>
			
			
		</div>
		)
}
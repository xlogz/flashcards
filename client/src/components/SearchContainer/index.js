import React from 'react';
import './styles.css'

function SearchContainer(){
	return(
		<div className="search-container">
			<div className="container">
				<div className="search-content">
					<form>
						<label>Search: &nbsp;
						<input type="text" placeholder="Title, Keyword, or Tag"></input><button className="search-submit-btn">Submit</button>
						</label>
						<div className="search-container-spacer">&nbsp;</div>
						
						<div className="search-container-spacer">&nbsp;</div>
						<button className="search-create-new-btn">Create New Flashcard Set</button>
					</form>
				</div>
				
			</div>
		</div>

		)
}

export default SearchContainer;
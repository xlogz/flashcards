import React from 'react';
import './styles.css'

function SearchContainer(){
	return(
		<div className="search-container">
		<div className="container">
			<div className="search-content">
				<label>Search: &nbsp;
				<input type="text" placeholder="Title, Keyword, or Tag"></input>
				</label>
				or

				<button>Create New Flashcard Set</button>
			</div>
			
		</div></div>

		)
}

export default SearchContainer;
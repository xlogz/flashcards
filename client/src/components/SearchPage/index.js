import React from 'react';
import './styles.css'
import { Link } from "react-router-dom";
import axios from 'axios';



class SearchContainer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			terms : "",
			searchresults: []
		}
	}

	handleInput = e =>{
		this.setState({terms: e.target.value});
	}

	handleSearch = e =>{
		e.preventDefault();
		console.log('searching for ' + this.state.terms);
		axios.get('/search', {headers: {terms: this.state.terms}}).then(results=>{
			this.setState({searchresults: results});
			console.log(this.state.searchResults);
		})
	}




	render(){
		return(
		<div className="search-container">
			<div className="container">
			<h1>
			Search
			</h1>
				<div className="search-content">
					<form>
						<label>
						<input type="text" placeholder="Title, Keyword, or Tag" onChange={this.handleInput}></input><br/><br/>

						<Link to={"/search/results?terms=" + this.state.terms}><button className="search-submit-btn">Submit</button></Link>
						</label>
					</form>
						<div className="search-container-spacer">&nbsp;</div>
						<div className="search-or-container">
							<div className="search-or-lines">&nbsp;</div><div className="search-or-text">or</div><div className="search-or-lines">&nbsp;</div>
						</div>
						<div className="search-container-spacer">&nbsp;</div>
						<Link to="/home/newcard"><button className="search-create-new-btn">Create New Flashcard Set</button></Link>
					
				</div>
				
			</div>
		</div>

		)
	}
	
}

export default SearchContainer;
import React from 'react';
import './styles.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import CardsContainer from '../CardsContainer';

class SearchContainer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			term: "",
			cards: []
		}
	}

	handleSearch = term =>{
		console.log('searching for ' + term);
		axios.get('/search', {headers: {terms: term}}).then(results=>{
			this.setState({cards: results.data});
			console.log(this.state.cards);
		})
	}


	componentDidMount(){
		const params = qs.parse(window.location.search);
		console.log(params);
		const searchTerm = params["?terms"];
		this.setState({term: searchTerm});
		this.handleSearch(searchTerm)

	}

	title = () =>{
		let title;
		if(this.state.cards[0] === undefined){
			title = (<div>No results for {this.state.term} </div>)
		}else{
			title =(<div>Search Results for {this.state.term}</div>)
		}
		return title;
	}


	render(){

		return(
		<div className="results-container">
			<div className="container">
			<h1>
				{this.title()}
			</h1>
				<div className="results-content">
					
					<CardsContainer cards={this.state.cards} mode="search"/>
					
					
				</div>
				
			</div>
		</div>

		)
	}
	
}

export default SearchContainer;
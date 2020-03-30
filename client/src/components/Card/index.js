import React from 'react';
import './styles.css';

export default class Card extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<div className="dashboard-card">
					<div>{this.props.title}</div>
					<div># of cards: {this.props.cardcount}</div>
					<div>Highest Score: {this.props.highestScore}</div>
				</div>
			)
		
	}
}
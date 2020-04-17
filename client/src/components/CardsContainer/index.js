import React,{Fragment} from 'react';
import Card from '../Card';
import './styles.css';
import axios from 'axios';


export default class CardContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cards: []
		}
	}


	render(){
		console.log(this.props.cards);
		

		const singleCard = this.props.cards.map((card,index)=>{
			
				return (<div className="card-flip-container" key={index} index={index}>
					<Card 
						id={card._id}
						title={card.title}
						cardcount={card.fields.length}
						highestScore={card.highestScore || "N/A"}
						previousLocation="categories"
						questionAnswers={card.fields}
						userId = {this.props.userId}
						/>
						
				
				</div>)
				
		})
		return (
			<Fragment>
			
			
			<div className="dashboard-card-container">{singleCard}</div>
			</Fragment>
			)
			


	}

}
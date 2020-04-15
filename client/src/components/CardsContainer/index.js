import React,{Fragment} from 'react';
import Card from '../Card';
import './styles.css';
import axios from 'axios';



export default class CardContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cards: [{title:"hello",
					cardcount:15,
					highestScore: 20},
					{title:"hello",
					cardcount:15,
					highestScore: 20},
					{title:"hello",
					cardcount:15,
					highestScore: 20},
					{title:"hello",
					cardcount:15,
					highestScore: 20},]
		}

	}


	componentDidMount(){


		const singleCard = this.state.cards.map((card,index)=>{
			if(card._id === this.props.currentFolderId){
				return (
						
				// <Link to={'/cards/' + index} >
				<div className="card-flip-container">
					<Card key={index} cardcount={card.cardcount} highestScore={card.highestScore}/>
				
				</div>
				// </Link>
			

				)
		}})

	}

	render(){
		
		
		return (
			<Fragment>
			
			
			<div className="dashboard-card-container"></div>
			</Fragment>
			)
			


	}

}
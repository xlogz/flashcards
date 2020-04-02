import React,{Fragment} from 'react';
import Card from '../Card';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let cards = [
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100
		}
	]


export default class CardContainer extends React.Component{

	render(){
		
		const singleCard = cards.map((card,index)=>{
			return (
						
			<Link to={'/home/cards/' + index} >
			<div>
				<Card id={index} title={card.title} cardcount={card.cardcount} highestScore={card.highestScore}/>
			
			</div>
			</Link>
		

		)})
		
		console.log(singleCard);
		return (
			<Fragment>
			
			
			<div className="dashboard-card-container">{singleCard}</div>
			</Fragment>
			)
			


	}

}
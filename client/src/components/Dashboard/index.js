import React from 'react';
import Card from '../Card';
import './styles.css'

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


export default class Dashboard extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		
		const singleCard = cards.map(card=>{
			return <Card title={card.title} cardcount={card.cardcount} highestScore={card.highestScore}/>
		})
		
		console.log(singleCard);
		return (

			<div className="dashboard-card-container">{singleCard}</div>)



	}

}
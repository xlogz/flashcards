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
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'sports',
		 folder: 'sports'
		},


		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'cooking',
		 folder: 'cooking'
		},



		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 tags: 'science',
		 folder: 'science'
		}
	]


export default class CardContainer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		
		const singleCard = cards.map((card,index)=>{
			if(card.tags === this.props.category && card.tags !== ""){
				return (
						
				// <Link to={'/cards/' + index} >
				<div className="card-flip-container">
					<Card id={index} title={card.title} cardcount={card.cardcount} highestScore={card.highestScore} previousLocation="categories"/>
				
				</div>
				// </Link>
			

				)

			}else if(card.folder === this.props.folder && card.folder !== ""){
				return (
						
				// <Link to={'/cards/' + index} >
				<div className="card-flip-container">
					<Card id={index} title={card.title} cardcount={card.cardcount} highestScore={card.highestScore}/>
				
				</div>
				// </Link>
			

				)
			}
		})
		
		console.log(singleCard);
		return (
			<Fragment>
			
			
			<div className="dashboard-card-container">{singleCard}</div>
			</Fragment>
			)
			


	}

}
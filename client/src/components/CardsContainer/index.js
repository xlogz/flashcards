import React,{Fragment} from 'react';
import Card from '../Card';
import './styles.css';
import axios from 'axios';

let cards = [
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'sports',
		 folder: 'sports'
		},


		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'cooking',
		 folder: 'cooking'
		},



		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		},
		{title: 'Random Card',
		 cardcount: 15,
		 highestScore: 100,
		 favorite: true,
		 owner: "logan",
		 tags: 'science',
		 folder: 'science'
		}
	]


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
			
				return (<div className="card-flip-container" key={index}>
					<Card 
						id={card._id}
						title={card.title}
						cardcount={card.fields.length}
						highestScore={card.highestScore || "N/A"}
						previousLocation="categories"
						questionAnswers={card.fields}/>
						
				
				</div>)
				
		})
		return (
			<Fragment>
			
			
			<div className="dashboard-card-container">{singleCard}</div>
			</Fragment>
			)
			


	}

}
import React,{Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';


class Cards extends React.Component{


render(){

	return(
		<Fragment>
		<div className="container">
			<CardsContainer/>

		</div>
		
		</Fragment>)
}
}

export default Cards;
import React,{Fragment} from 'react';
import './styles.css';
import CardsContainer from '../CardsContainer';

class CardPage extends React.Component{
render(){

	return(
		<Fragment>
		<div>this is the card page</div>
		<CardsContainer/>
		</Fragment>)
}
}

export default CardPage;
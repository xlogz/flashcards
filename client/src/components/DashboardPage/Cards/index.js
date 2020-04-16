import React,{Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';


class Cards extends React.Component{

constructor(props){
	super(props);
}

async componentDidMount(){
	console.log('this is user id from cards page');
	console.log(this.props.userId);
	await this.props.obtainCards("user",this.props.userId);
}

render(){

	return(
		<Fragment>
		<div className="container">
			<CardsContainer userId={this.props.userId}
				cards = {this.props.cards}
			/>

		</div>
		
		</Fragment>)
}
}

export default Cards;
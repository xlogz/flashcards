import React,{Fragment} from 'react';
import './styles.css';
import CardsContainer from '../CardsContainer';

class CardPage extends React.Component{
componentDidMount(){
	console.log(this.props.match);
}

render(){

	return(
		<Fragment>
		<div className="card-page-container">
			<div className="card-page-content">
				<div className="card">
					What is it called when you can only access a variable within a functions environment?

				</div>
				<div className="card-page-answer-input">
					<input type="text" placeholder="Answer"></input>
					</div>
				<div className="answers">
					<button className="card-page-submit-btn">Submit</button>
				</div>

			</div>
			
		</div>
		</Fragment>)
}
}

export default CardPage;
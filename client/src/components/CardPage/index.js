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
					<div className="card-text">
						What is it called when you can only access a variable within a functions environment?
					</div>
					

				</div>
				<div className="card-page-answer-input">
					<input type="text" className="answer-input" required=" "/>
						<label>Answer</label>
						<span></span>
					
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
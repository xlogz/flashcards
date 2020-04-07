import React,{Fragment} from 'react';
import './styles.css';
import CardsContainer from '../CardsContainer';

class CardPage extends React.Component{
	constructor(props){
		super(props);
	}
componentDidMount(){
	console.log(this.props.location);
}

componentWillReceiveProps(nextProps) {
	console.log(nextProps);
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location })
    }
  }

render(){

	return(
		<Fragment>
		
		<div className="card-page-container">
			<div className="container">
				<div className="card-page-content">
					<div>
						<div className="card">
							<div className="card-text">
								What is it called when you can only access a variable within a functions environment?
							</div>
						</div>
						<div className="card-page-answer-input">
							<input type="text" className="answer-input" required=" "/>
								<label>Answer</label>
								<span></span>
							<div className="answers">
								<button className="card-page-submit-btn">Submit</button>
							</div>
						</div>
						
					</div>

				</div>
			
			</div>
		</div>
		</Fragment>)
}
}

export default CardPage;
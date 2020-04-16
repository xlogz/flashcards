import React,{Fragment} from 'react';
import './styles.css';
import axios from "axios";
import qs from 'qs';

class CardPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			questionAnswers: this.props.questionAnswers,
			fields: [],
			title: "",
			score: [],
			answer: "",
			index: 0,
			cardElements: []

		}
	}
async componentDidMount(){
	const params = qs.parse(window.location.search);
	const id = params["?id"];
	await this.obtainFields(id);
	let card;
	const cards = document.getElementsByClassName("card");
	this.setState({cardElements : cards});
	console.log(cards);

	for(var i = 1; i < this.state.fields.length; i++){
		console.log(card);
		cards[i].classList.add("hide");
		console.log(cards[i].classList);
	}

}

componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location })
    }
  }

async obtainFields (id){
	await axios.get('/cards/data', {headers: {cardid: id}}).then(results =>{
		console.log(results.data);
		this.setState({fields : results.data.fields});
		this.setState({title: results.data.title});

	})
}

handleAnswer = async(e) =>{
	e.preventDefault();
	if(this.state.index !== this.state.fields.length -1){
		if(this.state.answer.toLowerCase() === this.state.fields[this.state.index].A.toLowerCase()){
			this.setState({score: [...this.state.score,1]})
		}else{
			this.setState({score: [...this.state.score,0]})
		}
		this.state.cardElements[this.state.index].classList.add("hide");
		await this.setState({index : this.state.index + 1});
		if(this.state.index === this.state.fields.length){
			console.log(this.state.score);
			console.log("You've reached the last card!")
		}else{
			console.log('revealing element ' + this.state.index);
			this.state.cardElements[this.state.index].classList.remove("hide");
		}
		
	}else{
		console.log(this.state.score);
		console.log("You've reached the last card!")
	}
	

}

handleChange = (e) =>{
	this.setState({answer: e.target.value});
}

render(){


	const cards = this.state.fields.map((qaObject, index) => {
		return(
				<div className={"card card-" + index} >
					<div className="card-text">
						{qaObject.Q}
					</div>
				</div>
				)
	})

	return(
		<Fragment>
		
		<div className="card-page-container">
			<div className="container">
				<div className="card-page-content">
					<div>
						{cards}
						<div className="card-page-answer-input">
							<form onSubmit={this.handleAnswer}>
								<input type="text" className="answer-input" required=" " onChange={this.handleChange}/>
									<label>Answer</label>
									<span></span>
								<div className="answers">
									<button className="card-page-submit-btn">Submit</button>
								</div>
							</form>
						</div>
						
					</div>

				</div>
			
			</div>
		</div>
		</Fragment>)
}
}

export default CardPage;
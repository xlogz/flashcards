import React,{Fragment} from 'react';
import './styles.css';
import axios from "axios";
import qs from 'qs';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

class CardPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			questionAnswers: this.props.questionAnswers,
			fields: [],
			title: "",
			record: [],
			score: 0,
			answer: "",
			index: 0,
			cardElements: [],
			exclamation: "",
			showScore: false,
			showResults: false,
			showInput: true,
			results: []

		}
	}
async componentDidMount(){
	const params = qs.parse(window.location.search);
	const id = params["?id"];
	await this.obtainFields(id);
	let card;
	const cards = document.getElementsByClassName("card");
	this.setState({cardElements : cards});

	for(var i = 1; i < this.state.fields.length; i++){
		cards[i].classList.add("hide");
	}

}

componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ prevPath: this.props.location })
    }
  }

async obtainFields (id){
	await axios.get('/cards/data', {headers: {cardid: id}}).then(results =>{
		this.setState({fields : results.data.fields}, () => {
			this.setState({fields: [...this.state.fields, {Q: "", A: ""}]})
		});
		this.setState({title: results.data.title});

	})
}

handleAnswer = async(e) =>{
	e.preventDefault();	
	let currentResult = {};
	if(this.state.index !== this.state.fields.length -1 ){
		if(this.state.answer.toLowerCase() === this.state.fields[this.state.index].A.toLowerCase()){
			this.setState({record: [...this.state.record, 1]}, ()=>{
				console.log(this.state.record);
				currentResult.correct = true
				this.setState({results : [...this.state.results, currentResult]})
			})
			
		}else{
			this.setState({record: [...this.state.record, 0]}, ()=>{
				currentResult.correct = false
			})
			console.log(this.state.record);

		}

		this.state.cardElements[this.state.index].classList.add("hide");
		await this.setState({index : this.state.index + 1},()=>{
			currentResult.Q = this.state.fields[this.state.index-1].Q;
			currentResult.A = this.state.fields[this.state.index-1].A;
			currentResult.userAnswer = this.state.answer;
			this.setState({results : [...this.state.results, currentResult]})
		});

		if(this.state.index === this.state.fields.length-1){
		for(var i = 0; i < this.state.fields.length-1 ; i++){
			if(this.state.record[i] === 1){
				await this.setState({score: this.state.score + 1}, ()=>{
				});

			}
			}
			this.setState({showScore: true});
		}
		

		console.log('revealing element ' + this.state.index);
		if(this.state.index < this.state.fields.length -1){
			this.state.cardElements[this.state.index].classList.remove("hide");

		}
		document.getElementsByClassName("answer-input")[0].focus();
		document.getElementsByClassName("answer-input")[0].value = "";
		
		
	}else{

		
		console.log((this.state.score/this.state.fields.length))
		if((this.state.score/this.state.fields.length) > .8){
				this.setState({exclamation: "Congrats! "})
			}else{
				this.setState({exclamation: "Keep on studying! "})
			}

		console.log("You've reached the last card!")
	}
	

}

handleChange = (e) =>{
	this.setState({answer: e.target.value});
}

handleResults = (e) =>{
	this.setState({showScore: false, showInput: false},()=>{
		this.setState({showResults: true});
	})
}

handleFavoriteClick = () =>{
	
}

handleRetry = () =>{
	this.setState({showInput: true, showResults: false, score: 0, record: [], index: 0, results: []}, () => {
		this.state.cardElements[this.state.index].classList.remove("hide");
	})
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

	const score = (  <div className="score">
						<div>
							You scored {this.state.score} out of {this.state.fields.length-1}!<br/>
							<div className="see-results-link"><a href="#" onClick={this.handleResults}>See Results</a></div>
						</div>

					</div>)

	const results = (  <div className="results">
						<div>
							{this.state.results.map((resultsObj, index) =>{

								if(resultsObj.correct){
									return(
										<div><div className="correct-answer">
										<CheckCircleIcon/>
{resultsObj.Q} <br/>

</div>
Your Answer: {resultsObj.userAnswer} <br/><br/>
										</div>
									)
								}else{
									return(
										<div>
										<div className="incorrect-answer">
										<CancelIcon/>
											{resultsObj.Q} <b>
											{resultsObj.A}</b>
											
										</div>
										
											Your Answer: {resultsObj.userAnswer}<br/><br/>
										</div>
										)
								}

								
							})}

							<div className="try-again-link"> <a href="#" onClick={this.handleRetry}>Try Again?</a> </div>
						</div>

					</div>)
	const answerInput = (
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
		)


	return(
		<Fragment>
		
		<div className="card-page-container">
			<div className="container">
				<div className="card-page-content">
					<div>
						{cards}
						{this.state.showScore ? score : "" }
						{this.state.showResults ? results : "" }
						{this.state.showInput ? answerInput : ""}
						
					</div>

				</div>
			
			</div>
		</div>
		</Fragment>)
}
}

export default CardPage;
import React from 'react';
import './styles.css'
import DeleteIcon from '@material-ui/icons/Delete';


export default class QAField extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			Q: "",
			A: ""
		}
	}

	updateQuestion = index => e =>{
		let updatedObj = {...this.state};
		updatedObj["Q"] = e.target.value;
		this.setState(updatedObj);
		this.props.updateField(index,updatedObj);
	}

	updateAnswer = index => e =>{
		let updatedObj = {...this.state};
		updatedObj["A"] = e.target.value; 
		this.props.updateField(index,updatedObj);
	}

	render(){
		return (
								<div className="newset-inputentry">
									<input type="text" name="question" placeholder="Question or Term" onChange={this.updateQuestion(this.props.index)}/>
									<div className="input-spacer">&nbsp;</div>
								     <input type="text" name="answer" placeholder="Answer or Definition" onChange={this.updateAnswer(this.props.index)}/>
								     	<div className="newset-deleteinput" onClick={this.props.deleteItem(this.props.index)}>
								     		<DeleteIcon/>
								     	</div>
							     	<hr/>
							     </div>)
	}

	
}
import React from 'react';
import './styles.css';
import AddIcon from '@material-ui/icons/Add';
import QAField from './QAField';


export default class NewSet extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			fields : [{Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""}]
		};
	}

	addInput = e => {
		e.preventDefault();
		this.setState({fields: [...this.state.fields, {Q:"", A:""} ]});
	}

	deleteItem = index => e =>{
		e.preventDefault();
		const arrayStart = this.state.fields.slice(0, index);
		const arrayEnd = this.state.fields.slice(index+1);
		const newArray = arrayStart.concat(arrayEnd);
		console.log(newArray);
		this.setState({fields: newArray});
	}

	render(){
		let inputs;
		inputs = this.state.fields.map((pair, index) => {
			return  <QAField key={index} Question={pair.Q} Answer={pair.A} deleteItem={this.deleteItem} index={index}/>
		})

		return(
			<div className="newset-outer-container">
				<div className="container"><div className="newset-yellow-bg">&nbsp;</div>
					<div className="newset-container">

						<form>	<div className="title-folder-header">
									<div className="new-card-header">New Set of Cards</div>
							    	 <input type="text" name="name" placeholder="Title"/> <div className="input-spacer">&nbsp;</div>

							    	 <select className="select-dropdown">
										<option value="Sports">Sports</option>
										<option value="Cooking">Cooking</option>
										<option value="Science">Science</option>

									</select>
							    	 <br/>
							    	 <br/>
						    	 </div>
							     
							    {inputs}

							      

							      <div className="button-container">
						     <button className="new-set-add-card-btn" onClick={this.addInput} ><AddIcon className="add-icon"/></button>
						     <br/>
						     <br/>
						  	<button type="submit" value="Submit" className="new-set-submit-btn" >Submit </button>
						  	</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}
import React from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import QAField from './QAField';
import './styles.css';

export default class NewSet extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			fields : [{Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""}],
			title: "",
			userId: "",
			folderId: ""
		};
	}

	addInput = e => {
		e.preventDefault();
		this.setState({fields: [...this.state.fields, {Q:"", A:""} ]});
	}

	deleteItem = index => e =>{
		const length = this.state.fields.length;
		e.preventDefault();
		if(length === 2){
			console.log('You need a minimum of 2 cards to create a new set');
		}else{

			const arrayStart = this.state.fields.slice(0, index);
			const arrayEnd = this.state.fields.slice(index+1);
			const newArray = arrayStart.concat(arrayEnd);
			console.log(newArray);
			this.setState({fields: newArray});
		}
		
	}

	updateTitle = e => {
		this.setState({title: e.target.value});
	}

	updateField = (index,content) =>{
		let newArray = [...this.state.fields];
		newArray[index] = content;
		this.setState({fields:newArray});
	}

	handleSubmit = e =>{
		e.preventDefault();
		this.setState({userId: this.props.userId}, ()=>{
			this.setState({folderId: this.props.currentFolderId}, ()=>{
				console.log(this.props.currentFolderId);
				axios.post('/cards/newset', this.state).then(results => {
					window.location="/cards?id=" + results.data;

				});
			})
		})
		
		
		
	}

	async componentDidMount(){
		await this.props.fetchFolders();
		this.setState({userId: this.props.userId})
		this.setState({folderId: this.props.currentFolderId})
	}

	render(){
		let inputs;
		inputs = this.state.fields.map((pair, index) => {
			return  <QAField 
						key={index} 
						Question={pair.Q}
						Answer={pair.A}
						deleteItem={this.deleteItem}
						index={index}
						updateField={this.updateField}
					/>
		})

		

		return(
			<div className="newset-outer-container">
				<div className="container"><div className="newset-yellow-bg">&nbsp;</div>
					<div className="newset-container">

						<form onSubmit={this.handleSubmit}>	<div className="title-folder-header">
									<div className="new-card-header">New Set of Cards</div>
									<div className="new-card-header-underline">&nbsp;</div>
							    	 <input type="text" name="title" placeholder="Title" onChange={this.updateTitle}/> <div className="input-spacer">&nbsp;</div>

							    	 <select className="select-dropdown" onChange={this.props.handleSelectChange}>
										{this.props.populateDropdown()}

									</select>
							    	 <br/>
							    	 <br/>
						    	 </div>
							     
							    {inputs}

							      

							      <div className="button-container">
						     <div className="new-set-add-card-btn" onClick={this.addInput} ><AddIcon className="add-icon"/></div>
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
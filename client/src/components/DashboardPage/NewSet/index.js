import React from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import QAField from './QAField';
import './styles.css';
import { withRouter } from "react-router";
import {useHistory,
  useLocation} from 'react-router-dom';

class NewSet extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			fields : [{Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""},
					  {Q:"", A:""}],
			title: "",
			userId: "",
			folderId: "",
			containsBlanks: true,
			containsBlankTitle: true
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
		if(e.target.value === ""){
			this.setState({containsBlankTitle : true})
		}else{
			this.setState({containsBlankTitle : false})
		}
	}

	updateField = (index,content) =>{
		let newArray = [...this.state.fields];
		newArray[index] = content;
		this.setState({fields:newArray, containsBlanks: false}, ()=>{
			for(let i = 0 ; i < this.state.fields.length; i++){
				if(this.state.fields[i].Q === "" || this.state.fields[i].A === ""){
					this.setState({containsBlanks: true});
				}
			}
		});
	}

	handleSubmit = e =>{
		e.preventDefault();
		const {history} = this.props;
		if(!this.state.containsBlanks && !this.state.containsBlankTitle){
			this.setState({userId: this.props.userId}, ()=>{
				this.setState({folderId: this.props.currentFolderId}, ()=>{
					console.log(this.props.currentFolderId);
					axios.post('/cards/newset', this.state).then(results => {
						history.push("/cards?id=" + results.data);

					});
				})
			})
		}else{
			console.log("Form contains blanks");
		}
		
		
		
		
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

export default withRouter(NewSet);
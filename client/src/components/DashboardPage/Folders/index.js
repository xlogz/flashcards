import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';
import Modal from '../Modal';
import axios from 'axios';


class Folders extends React.Component{

constructor(props){
	super(props);
	this.state = {
		folders : [],
		currentFolderId : ""
	}
}

toggleModal = e =>{
	console.log(document.getElementsByClassName('modal-wrapper')[0]);
	document.getElementsByClassName('modal-wrapper')[0].style.display = 'block';
	document.getElementById("root").style.overflow = 'hidden';
}

fetchFolders = () =>{
	axios.get('/cards/folders').then(results => {
		console.log(results.data);
		this.setState({folders: results.data});
	});
}

handleSelectChange = e =>{
	console.log(e.target.value);
	this.setState({currentFolderId: e.target.value});
}

populateDropdown = () => {
	return this.state.folders.map(folder=>{
		return <option value={folder._id}>{folder.title}</option>
	})
}

deleteFolder = () => {
	axios.delete('/cards/folders', {data: {folderId : this.state.currentFolderId}}).then(results => {
		console.log(results.data);
		this.fetchFolders();
	});
}

componentDidMount(){
	this.fetchFolders();
	console.log(this.state.folders);
}


render(){


	return(
		<Fragment>
		<Modal userId={this.props.userId} updateFolders={this.fetchFolders}/>
		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown" onChange={this.handleSelectChange}>
							
					{this.populateDropdown()}

					</select>
				</div>
				<button className="folder-add-new-btn" onClick={this.toggleModal}>New Folder</button>
				<button className="folder-delete-new-btn" onClick={this.deleteFolder}>Delete Folder</button>
	    	</div>
	    	<br/>
    		<CardsContainer folder="sports"/>
    	{/* Should be folders props*/}
    	</div>
    	
		</Fragment>


		)
}
}

export default Folders;
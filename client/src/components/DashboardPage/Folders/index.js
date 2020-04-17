import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';
import Modal from '../Modal';
import axios from 'axios';


class Folders extends React.Component{

constructor(props){
	super(props);
	this.state = {
		initialUpdate: false,
		title: ""
	}
}

toggleModal = name => e =>{
	const className = "modal-"+ name;
	console.log(document.getElementsByClassName(className)[0]);
	document.getElementsByClassName(className)[0].style.display = 'block';
	document.getElementById("root").style.overflow = 'hidden';
}



async componentDidMount(){
	const folders = await this.props.fetchFolders();
	console.log(this.props.folders[0])
	if(this.state.initialUpdate === false && this.props.folders[0] !== undefined){
		await this.props.updateCurrentFolderId(this.props.folders[0]._id);
		this.props.obtainCards("folder",this.props.folders[0]._id);
		this.props.updateUserId(this.props.folders[0].userId);
		this.setState({initialUpdate: true})
	}else{
		return;
	}
}


handleForm = name => e =>{
	e.preventDefault();
	const data = {};
	console.log(this.props.userId);
	console.log('attempting to add new folder');
	data.title = this.state.title;
	data.userId = this.props.userId;
	console.log(data);
	axios.post('/cards/newfolder', data).then(results =>{
		this.props.fetchFolders();
		document.getElementsByClassName(name)[0].style.display = 'none';
		document.getElementById("root").style.overflow = 'inherit';
	})

}

handleTitle = e => {
	this.setState({title: e.target.value});
}




render(){


	return(
		<Fragment>
		<Modal userId={this.props.userId}
			   updateFolders={this.props.fetchFolders}
			   name="addfolder"
			   header="Add New Modal"
			   handleTitle={this.handleTitle}
			   handleForm={this.handleForm}
			   body={(<div className="modal-body-content">
									<form onSubmit={this.handleForm("modal-addfolder")}>
										<input type="text" placeholder="Title" onChange={this.handleTitle}/>
										<button className="modal-add-new-btn">Submit</button>
									</form>
								</div>)}
			   />

		<Modal userId={this.props.userId}
			   updateFolders={this.props.fetchFolders}
			   name="deletefolder"
			   header="Are you sure you want to delete?"
			   body={(<div className="modal-body-content">
									<form onSubmit={this.props.deleteFolder("modal-deletefolder")}>
										<button className="folder-delete-new-btn">Delete</button>
										<button className="folder-add-new-btn">Cancel</button>
									</form>
								</div>)}
			   />


		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown" onChange={this.props.handleSelectChange}>
							
					{this.props.populateDropdown()}

					</select>
				</div>
				<button className="folder-add-new-btn" onClick={this.toggleModal("addfolder")}>New Folder</button>
				<button className="folder-delete-new-btn" onClick={this.toggleModal("deletefolder")}>Delete Folder</button>
	    	</div>
	    	<br/>
    		<CardsContainer 
    			currentFolderId={this.props.currentFolderId}
    			userId={this.props.userId}
    			cards={this.props.cards} />
    	{/* Should be folders props*/}
    	</div>
    	
		</Fragment>


		)
}
}

export default Folders;
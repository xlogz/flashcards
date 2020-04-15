import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';
import Modal from '../Modal';



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


componentDidMount(){
	// this.props.fetchFolders();
	console.log(this.props);
}

// populateDropdown = () => {
// 		return this.props.folders.map(folder=>{
// 			return <option value={folder._id}>{folder.title}</option>
// 		})
// 	}

render(){


	return(
		<Fragment>
		<Modal userId={this.props.userId} updateFolders={this.props.fetchFolders}/>
		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown" onClick={this.props.handleSelectChange} onChange={this.props.handleSelectChange}>
							
					{this.props.populateDropdown()}

					</select>
				</div>
				<button className="folder-add-new-btn" onClick={this.toggleModal}>New Folder</button>
				<button className="folder-delete-new-btn" onClick={this.props.deleteFolder}>Delete Folder</button>
	    	</div>
	    	<br/>
    		<CardsContainer folder={this.props.currentFolderId}/>
    	{/* Should be folders props*/}
    	</div>
    	
		</Fragment>


		)
}
}

export default Folders;
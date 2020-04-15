import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';
import Modal from '../Modal';
import axios from 'axios';


class Folders extends React.Component{

constructor(props){
	super(props);
}

toggleModal = e =>{
	console.log(document.getElementsByClassName('modal-wrapper')[0]);
	document.getElementsByClassName('modal-wrapper')[0].style.display = 'block';
	document.getElementById("root").style.overflow = 'hidden';
}



async componentDidMount(){
	await this.props.fetchFolders();
	 this.props.updateCurrentFolderId(this.props.folders[0]._id);
	 this.props.obtainCards(this.props.folders[0]._id);
}


render(){


	return(
		<Fragment>
		<Modal userId={this.props.userId} updateFolders={this.props.fetchFolders}/>
		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown" onChange={this.props.handleSelectChange}>
							
					{this.props.populateDropdown()}

					</select>
				</div>
				<button className="folder-add-new-btn" onClick={this.toggleModal}>New Folder</button>
				<button className="folder-delete-new-btn" onClick={this.props.deleteFolder}>Delete Folder</button>
	    	</div>
	    	<br/>
    		<CardsContainer currentFolderId={this.props.currentFolderId} userId={this.props.userId} cards={this.props.cards} />
    	{/* Should be folders props*/}
    	</div>
    	
		</Fragment>


		)
}
}

export default Folders;
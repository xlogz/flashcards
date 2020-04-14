import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';
import Modal from '../Modal';


class Folders extends React.Component{

toggleModal = e =>{
	console.log(document.getElementsByClassName('modal-wrapper')[0]);
	document.getElementsByClassName('modal-wrapper')[0].style.display = 'block';
	document.getElementById("root").style.overflow = 'hidden';
}


render(){
	return(
		<Fragment>
		<Modal/>
		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown">
							<option value="Sports">Sports</option>
							<option value="Cooking">Cooking</option>
							<option value="Science">Science</option>

					</select>
				</div>
				<button className="folder-add-new-btn" onClick={this.toggleModal}>New Folder</button>
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
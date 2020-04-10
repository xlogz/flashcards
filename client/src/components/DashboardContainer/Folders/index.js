import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';



class Folders extends React.Component{

render(){
	return(
		<Fragment>
		<div  className="container">
			<div className="dashboard-folder-title-container">
				<div>
					<select className="select-dropdown">
							<option value="Sports">Sports</option>
							<option value="Cooking">Cooking</option>
							<option value="Science">Science</option>

					</select>
				</div>
				<button className="folder-add-new-btn">New Folder</button>
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
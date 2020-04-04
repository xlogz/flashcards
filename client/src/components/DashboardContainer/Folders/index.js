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
					<select className="select-css">
							<option value="Development">Development</option>
							<option value="Cooking">Cooking</option>
							<option value="Art">Art</option>
							<option value="Math">Math</option>
							<option value="Design">Design</option>

					</select>
				</div>
				<button className="folder-add-new-btn">New Folder</button>
	    	</div>
	    	<br/>
    		<CardsContainer/>
    	</div>
		</Fragment>


		)
}
}

export default Folders;
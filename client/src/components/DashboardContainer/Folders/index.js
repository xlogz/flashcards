import React, {Fragment} from 'react';
import './styles.css';
import CardsContainer from '../../CardsContainer';



class Folders extends React.Component{

render(){
	return(
		<Fragment>
			<div className="dashboard-card-container">
			<div>Folder Name</div>
			<button className="dropbtn">Dropdown
    		</button></div>
    		<CardsContainer/>
		</Fragment>


		)
}
}

export default Folders;
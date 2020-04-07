import React from 'react';
import './styles.css';
import AddIcon from '@material-ui/icons/Add';


export default class NewSet extends React.Component{
	constructor(props){
		super(props);

		this.state = {};
		
	}

	render(){
		return(
			<div className="">
				<div className="container">
					<div className="newset-container">
						<form>	<div className="title-folder-header">
									<div className="new-card-header">Add a new set of cards</div>
							    	 <input type="text" name="name" placeholder="Title"/> <div className="input-spacer">&nbsp;</div>

							    	 <select className="newset-select-css">
										<option value="Sports">Sports</option>
										<option value="Cooking">Cooking</option>
										<option value="Science">Science</option>

									</select>
							    	 <br/>
							    	 <br/>
						    	 </div>
							     
							     <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							     
							     <hr/>

							      <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							      <hr/>



							      <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							      <hr/>


							      <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							      <hr/>


							      <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>
							      <hr/>

							      <input type="text" name="name" placeholder="Question or Term"/>
						     
								<div className="input-spacer">&nbsp;</div>
						   
							
							     <input type="text" name="name" placeholder="Answer or Definition"/>

							      <hr/>

							      <div className="button-container">
						     <button type="submit" value="Submit" className="new-set-add-card-btn" ><AddIcon/> </button>
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
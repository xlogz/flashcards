import React from 'react';
import './styles.css';

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
						     
						  	<button type="submit" value="Submit" className="new-set-submit-btn" >Submit </button>
						</form>
					</div>
				</div>
			</div>
			)
	}
}
import React from 'react';
import './styles.css';

export default class SignUp extends React.Component{
	constructor(props){
		super(props);

		this.state = {};
		
	}

	render(){
		return(
			<div className="center-container">
				<div className="login-container">

					<div className="login-header-bar">
						Sign Up
					</div>
					<div className="login-header-spacer">&nbsp;</div>
					<form>
					<input type="text" name="name" placeholder="Full Name"/>
					     
					     <br/>
					    	 <input type="text" name="name" placeholder="Username"/>
					     
					     <br/>
						     
						     <input type="text" name="name" placeholder="Email"/>
					     
					     <br/>
					   
						
						     <input type="text" name="name" placeholder="Password"/>
						     <br/>
					     
					  	<input type="submit" value="Submit" className="login-btn"/>
					</form>
				</div>
			</div>
			)
	}
}
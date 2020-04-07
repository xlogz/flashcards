import React from 'react';
import './styles.css';

export default class Login extends React.Component{
	constructor(props){
		super(props);

		this.state = {};
		
	}

	render(){
		return(
			<div className="center-container">
				<div className="login-container">

					<div className="login-header-bar">
						Sign In
					</div>
					<div className="login-header-spacer">&nbsp;</div>
					<div className="login-header-spacer">&nbsp;</div>
					<form>
					    	
						     
						     <input type="text" name="name" placeholder="Username or Email"/>
					     
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
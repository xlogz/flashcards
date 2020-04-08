import React from 'react';
import './styles.css';

export default class Login extends React.Component{
	state = {
		username: "",
		login: ""
	}

	handleUsername = e  =>{
		const value = e.target.value;
		this.setState({username : value});

		const usernameElement = document.getElementsByTagName("label")[0];
		if(value !== ""){
			usernameElement.style.position = "absolute";
			usernameElement.style.left = "0px";
			usernameElement.style.top = "-20px";
			usernameElement.style.fontSize = "12px";
			usernameElement.style.color = "#ec1092";
		}else{
			usernameElement.style.position = "absolute";
			usernameElement.style.left = "0px";
			usernameElement.style.top = "-10px";
			usernameElement.style.fontSize = "16px";
			usernameElement.style.color = "#c3c3c3";
		}
	}

	handlePassword = e  =>{
		const value = e.target.value;
		this.setState({username : value});

		// const usernameElement = document.getElementsByTagName("label")[2];
		// if(value !== ""){
		// 	usernameElement.style.position = "absolute";
		// 	usernameElement.style.left = "0px";
		// 	usernameElement.style.top = "-20px";
		// 	usernameElement.style.fontSize = "12px";
		// 	usernameElement.style.color = "#ec1092";
		// }else{
		// 	usernameElement.style.position = "absolute";
		// 	usernameElement.style.left = "0px";
		// 	usernameElement.style.top = "-10px";
		// 	usernameElement.style.fontSize = "16px";
		// 	usernameElement.style.color = "#c3c3c3";
		// }

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
					    	
						     <div className="log-in-form-username-label">
						     	<input type="text" name="name" required=" " onChange={this.handleUsername}/>
						     	<div className="label-wrapper">
						     		<label>Username</label>
						     	</div>
						     </div>
					     
					     <br/>
					   
						<div className="log-in-form-password-label">
						     <input type="password" name="name" placeholder="" required=" " onChange={this.handlePassword}/>
						     <div className="label-wrapper">
						     	<label>Password</label>
						     </div>
						     <br/>

					     </div>
					  	<input type="submit" value="Submit" className="login-btn"/>

					</form>
				</div>
			</div>
			)
	}
}
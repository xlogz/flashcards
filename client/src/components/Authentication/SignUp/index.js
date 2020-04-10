import React from 'react';
import './styles.css';
import axios from 'axios';

export default class SignUp extends React.Component{
	state = {
		name: "",
		username: "",
		email: "",
		password: "",
		errors: 0,
		// nameError: "",
		usernameError: "",
		emailError: "",
		passwordError: "",
	}

	nameChange = e =>{
		const value = e.target.value;
		this.setState({name : value});
	}

	userNameChange = e =>{
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

	emailChange = e =>{
		this.getLabels();
		const value = e.target.value;
		this.setState({email : value});
		const emailElement = document.getElementsByTagName("label")[1];
		if(value !== ""){
			emailElement.style.position = "absolute";
			emailElement.style.left = "0px";
			emailElement.style.top = "-20px";
			emailElement.style.fontSize = "12px";
			emailElement.style.color = "#ec1092";
		}else{
			emailElement.style.position = "absolute";
			emailElement.style.left = "0px";
			emailElement.style.top = "-10px";
			emailElement.style.fontSize = "16px";
			emailElement.style.color = "#c3c3c3";
		}
	}

	getLabels = () =>{
		
	}

	passwordChange = e =>{
		const value= e.target.value;
		this.setState({password : value});

		const passwordElement = document.getElementsByTagName("label")[2];
		if(value !== ""){
			passwordElement.style.position = "absolute";
			passwordElement.style.left = "0px";
			passwordElement.style.top = "-20px";
			passwordElement.style.fontSize = "12px";
			passwordElement.style.color = "#ec1092";
		}else{
			passwordElement.style.position = "absolute";
			passwordElement.style.left = "0px";
			passwordElement.style.top = "-10px";
			passwordElement.style.fontSize = "16px";
			passwordElement.style.color = "#c3c3c3";
		}
	}

	submitForm = e =>{


		const data = {	
			username : this.state.username,
			email: this.state.email,
			password: this.state.password
		}
		e.preventDefault();
		axios.post('/user/signup',data).then(results => {
			console.log(results);
			if(results.data.usernameError){
				this.setState({usernameError: results.data.usernameError});
			}else{
				this.setState({usernameError: ""});
			}
			if(results.data.emailError){
				this.setState({emailError: results.data.emailError});
			}else{
				this.setState({emailError: ""});
			}

			if(Object.keys(results.data).length === 0){
				console.log("Sign up was successful. Redirecting user to main page");
			}
		})

		
	}

	render(){
		
		return(
			<div className="center-container">
				<div className="sign-up-container">

					<div className="sign-up-header-bar">
						Sign Up
					</div>
					<div className="sign-up-header-spacer">&nbsp;</div>
						<div className="register-form">
						<form onSubmit={this.submitForm}>
								<div  className="sign-up-form-username-label">
						    	 	<input type="text" name="name" onChange={this.userNameChange} required=" "/>
						    	 	<div className="label-wrapper">
						    	 		<label>Username</label>
						    	 		<div className="sign-up-errors-container">
						     				<div className="sign-up-errors-username">
						     				{this.state.usernameError}
						     				</div>
						     			</div>
						    	 	</div>
						    	 </div>
						    	 
						     	<br/>
							    <div  className="sign-up-form-email-label">
							     	<input type="email" name="email" required onChange={this.emailChange}/>
							     	<div className="label-wrapper">
						    	 		<label>Email</label>
						    	 		<div className="sign-up-errors-container">
						     				<div className="sign-up-errors-email">
						     				{this.state.emailError}
						     				</div>
						     			</div>

						    	 	</div>
							    </div>
							    
						     	<br/>
						   		
								<div className="sign-up-form-password-label">
							    	<input type="password" name="password" required=" " onChange={this.passwordChange} pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/>
							     	<div className="label-wrapper">
						    	 		<label>Password</label><div className="password-rules">At least one upper case, lower case, #</div>
						    	 	</div>
							    </div>
								<div className="sign-up-errors-container">
							    	<div className="sign-up-errors-password">
						     			{this.state.passwordError}
						     		</div>
							    </div>
							     
						     <div className="sign-up-button-container">

						  		<input type="submit" value="Submit" className="sign-up-submit-btn"/>
						  	</div>
						</form>
					</div>
				</div>
			</div>
			)
	}
}
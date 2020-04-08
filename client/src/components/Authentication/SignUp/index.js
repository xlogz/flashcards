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
			usernameElement.style.color = "black";
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
			emailElement.style.color = "black";
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
			passwordElement.style.color = "black";
		}else{
			passwordElement.style.position = "absolute";
			passwordElement.style.left = "0px";
			passwordElement.style.top = "-10px";
			passwordElement.style.fontSize = "16px";
			passwordElement.style.color = "#c3c3c3";
		}
	}

	validateForm = () =>{
		if(this.state.username.length > 2 && this.state.nameError !== ""){
			this.setState({errors : this.state.errors - 1})
			this.setState({usernameError: ""});

		}
		if(this.state.username.length <= 2){
			if(this.state.usernameError === ""){
				this.setState({usernameError: "Minimum length is 3 characters"});
				this.setState({errors : this.state.errors + 1})
			}
		}else if(this.state.errors === 0){
			return true
		}else{
			return false;
		}
	}

	submitForm = e =>{
		e.preventDefault();
		let valid = this.validateForm();
		if(this.state.errors.length===0){
			const data = {	
				name : this.state.name,
				username : this.state.username,
				email: this.state.email,
				password: this.state.password
			}
				e.preventDefault();
				console.log('submitting');
				const result = axios.post('/user/signup',data);
				console.log(result);
		}else{
			console.log('there are errors with your entries');
		}

		
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
						    	 	</div>
						    	 </div>
						    	 <div className="sign-up-errors-container">
						     		<div className="sign-up-errors-username">
						     			{this.state.usernameError}
						     		</div>
						     	</div>
						     	<br/>
							    <div  className="sign-up-form-email-label">
							     	<input type="email" name="email" required onChange={this.emailChange}/>
							     	<div className="label-wrapper">
						    	 		<label>Email</label>
						    	 	</div>
							    </div>
							    <div className="sign-up-errors-container">
						     		<div className="sign-up-errors-email">
						     			{this.state.emailError}
						     		</div>
						     	</div>
						     	<br/>
						   		
								<div className="sign-up-form-password-label">
							    	<input type="password" name="password" required=" " onChange={this.passwordChange} pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/>
							     	<div className="label-wrapper">
						    	 		<label>Password</label>
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
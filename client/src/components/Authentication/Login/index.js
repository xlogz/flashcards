import React from 'react';
import axios from "axios";
import { Redirect, Switch } from 'react-router-dom'
import './styles.css';

export default class Login extends React.Component{
	state = {
		username: "",
		password: "",
		usernameError: "",
		passwordError: "",
		loggedIn: false,
		redirect: null
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
		this.setState({password: value});

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

	handleLogin = (e) =>{
		e.preventDefault();
		const data = {username : this.state.username,
					  password: this.state.password}
		axios.put('/user/login', data).then(results => {
			console.log(results);

			if(results.data.noUsername){
					this.setState({'usernameError' : 'Username could not be found'});	
			}else{
					this.setState({'usernameError' : ' '});	
					if(results.data.validPassword){
						this.setState({'loggedIn' : true})
						this.setState({'passwordError' : ''})
						console.log('You logged in!');
						this.props.auth();
						this.setState({redirect: true});
						
					}else{
						this.setState({'passwordError' : 'Incorrect Password'})
					}
			}
			
		
			


		});

		
	}

	render(){
		if(this.state.redirect){
			return (<Redirect to={
				{
            	pathname: '/home',
            	state: { fromLogin: true } } }/>)
		}
		return(
			<div className="center-container">
				<div className="login-container">

					<div className="login-header-bar">
						Sign In
					</div>
					<div className="login-header-spacer">&nbsp;</div>
					<div className="login-header-spacer">&nbsp;</div>
					<form onSubmit={this.handleLogin}>
					    	
						     <div className="log-in-form-username-label">
						     	<input type="text" name="name" required=" " onChange={this.handleUsername}/>
						     	<div className="label-wrapper">
						     		<label>Username</label>
						     	</div>
						     	{this.state.usernameError}
						     </div>
					     
					     <br/>
					   
						<div className="log-in-form-password-label">
						     <input type="password" name="name" placeholder="" required=" " onChange={this.handlePassword}/>
						     <div className="label-wrapper">
						     	<label>Password</label>
						     </div>
						     {this.state.passwordError}
						     <br/>

					     </div>
					  	<input type="submit" value="Submit" className="login-btn"/>

					</form>
				</div>
			</div>
			)
	}
}
import React from 'react';
import NavBar from './components/Navbar'
import ContentContainer from './components/ContentContainer'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Cookies from 'universal-cookie'
import axios from 'axios';
const cookies = new Cookies();


export default class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.updateUsername = this.updateUsername.bind(this);
		this.updateUserId = this.updateUserId.bind(this);
		this.state = {
			loggedIn : null,
			username: "",
			userId: ""
		}
	}

	handleLogin(){
		this.setState({loggedIn : true});
	}

	handleLogout(){
		this.setState({loggedIn : false});
		cookies.remove('token');
	}

	updateUsername(username){
		this.setState({username : username});
	}

	updateUserId(id){
		this.setState({userId : id});
	}

	async obtainUserFromToken(token){
		const results = await axios.put('/user/token',token);
		return results;
	
	}

	async componentDidMount(){
		const cookieToken = cookies.get('token');
		console.log('initial mount');
		console.log(cookieToken);
		const results = await this.obtainUserFromToken(cookieToken);
		console.log(results);
		if(results.error === undefined){
			console.log(this.state.userId)
			this.updateUserId(results.data.userId);
			this.updateUsername(results.data.username);
			console.log(this.state.userId)
			console.log(this.state.username)
			this.handleLogin();
		}
		
	}

	render(){
		return (
    
	    <React.Fragment>
	    <Router>
	    <NavBar
	    	loggedIn={this.state.loggedIn}
	    	logOut={this.handleLogout}
	    />
	    <ContentContainer 
	    	auth={this.handleLogin}
	    	loggedIn={this.state.loggedIn}
	    	username={this.state.username}
	    	updateUsername={this.updateUsername}
	    	username={this.state.username}
	    	updateUsername={this.updateUsername}
	    	userId={this.state.userId}
	    	updateUserId={this.updateUserId}
	    />
	    </Router>
	    </React.Fragment>
  );
	}
  
}
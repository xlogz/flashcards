import React from 'react';
import NavBar from './components/Navbar'
import ContentContainer from './components/ContentContainer'
import {
  BrowserRouter as Router,
} from "react-router-dom";


export default class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {loggedIn : true
		}
	}

	handleLogin(){
		this.setState({loggedIn : true});
	}

	handleLogout(){
		this.setState({loggedIn : false});
	}

	render(){
		return (
    
	    <React.Fragment>
	    <Router>
	    <NavBar loggedIn={this.state.loggedIn} logOut={this.handleLogout}/>
	    <ContentContainer auth={this.handleLogin} loggedIn={this.state.loggedIn} />
	    </Router>
	    </React.Fragment>
  );
	}
  
}
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
		this.state = {loggedIn : false
		}
	}

	handleLogin(){
		this.setState({loggedIn : true});
	}

	render(){
		return (
    
	    <React.Fragment>
	    <Router>
	    <NavBar loggedIn={this.state.loggedIn}/>
	    <ContentContainer auth={this.handleLogin} loggedIn={this.state.loggedIn} />
	    </Router>
	    </React.Fragment>
  );
	}
  
}
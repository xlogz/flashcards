import React from 'react';
import './styles.css';

import {
  Switch,
  Route,
} from "react-router-dom";

import DashboardPage from '../DashboardPage';
import SearchPage from '../SearchPage'
import FlashcardsPage from '../FlashcardsPage'
import CardPage from '../CardPage'
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import NotLoggedInPage from '../NotLoggedInPage';
import FrontPage from '../FrontPage';


export default class ContentContainer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){




		return(
		<React.Fragment>
		<div className="bg"></div>
		<div className="content-container">
			<Switch>
				<Route path="/home/">
					{ this.props.loggedIn === null ? "" :  this.props.loggedIn === true ? (<DashboardPage loggedIn={this.props.loggedIn} userId={this.props.userId}/>) : (<FrontPage/>)}

				</Route>
				<Route exact path="/">
					{ this.props.loggedIn === null ? "" :  this.props.loggedIn === true ? (<DashboardPage loggedIn={this.props.loggedIn} userId={this.props.userId}/>) : (<FrontPage/>)}
				</Route> 
				<Route path="/search">
					<SearchPage loggedIn={this.props.loggedIn}/>
				</Route> 
				<Route path="/flashcards">
					<FlashcardsPage loggedIn={this.props.loggedIn}/>
				</Route> 
				<Route exact path="/cards/:idNumber">
					<CardPage loggedIn={this.props.loggedIn}/>
				</Route>
				<Route exact path="/login">
					<Login auth={this.props.auth}
						   updateUsername={this.props.updateUsername}
						   updateUserId={this.props.updateUserId}
						   />
						   
				</Route>
				<Route exact path="/signup">
					<SignUp/>
				</Route>

			</Switch>
			
		</div>
		</React.Fragment>

		)
	}
	
}
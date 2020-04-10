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


export default class ContentContainer extends React.Component{
	render(){
		return(
		<React.Fragment>
		<div className="bg"></div>
		<div className="content-container">
			<Switch>
				<Route path="/home">
					<DashboardPage/>
				</Route>
				<Route exact path="/">
					<DashboardPage/>
				</Route> 
				<Route path="/search">
					<SearchPage/>
				</Route> 
				<Route path="/flashcards">
					<FlashcardsPage/>
				</Route> 
				<Route exact path="/cards/:idNumber">
					<CardPage/>
				</Route>
				<Route exact path="/login">
					<Login auth={this.props.auth}/>
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
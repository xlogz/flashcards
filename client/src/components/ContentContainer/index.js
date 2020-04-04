import React from 'react';
import './styles.css';

import {
  Switch,
  Route,
} from "react-router-dom";

import DashboardContainer from '../DashboardContainer';
import SearchContainer from '../SearchContainer'
import FlashcardsContainer from '../FlashcardsContainer'
import CardPage from '../CardPage'
import Login from '../Authentication/Login';

export default function ContentContainer(){
	return(
		<React.Fragment>
		<div className="bg"></div>
		<div className="content-container">
			<Switch>
				<Route path="/home">
					<DashboardContainer/>
				</Route>
				<Route exact path="/">
					<DashboardContainer/>
				</Route> 
				<Route path="/search">
					<SearchContainer/>
				</Route> 
				<Route path="/flashcards">
					<FlashcardsContainer/>
				</Route> 
				<Route exact path="/cards/:idNumber">
					<CardPage/>
				</Route>
				<Route exact path="/login">
					<Login/>
				</Route>

			</Switch>
			
		</div>
		</React.Fragment>

		)
}
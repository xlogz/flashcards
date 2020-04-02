import React from 'react';
import './styles.css';

import {
  Switch,
  Route,
} from "react-router-dom";

import DashboardContainer from '../DashboardContainer';
import SearchContainer from '../SearchContainer'
import FlashcardsContainer from '../FlashcardsContainer'

export default function ContentContainer(){
	return(
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

			</Switch>
			
		</div>

		)
}
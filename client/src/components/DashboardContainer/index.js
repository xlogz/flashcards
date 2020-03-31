import React from 'react';
import './styles.css';
import CardsContainer from '../CardsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cards from "./Cards";
import Folders from "./Folders";
import Favorites from "./Favorites";
import CardPage from '../CardPage';

export default function Container(){
	return(
		<div className="dashboard-content">
			<Router>
				<div className="dashboard-sticky-container">
					<div className="dashboard-menu-container">
						<div className="dashboard">
							<div className="dashboard-title">Dashboard</div>
							<div className="dashboard-menu">
								<Link to="/folders">
									<div className="dashboard-menu-item-container">
										<div className="dashboard-menu-item">Folders</div>
									</div>
								</Link>
									<Link to="/cards">
									<div className="dashboard-menu-item-container">
										<div className="dashboard-menu-item">Cards</div>
									</div>
									</Link>
									<Link to="/favorites">
									<div className="dashboard-menu-item-container">
										<div className="dashboard-menu-item">Favorites</div>
									</div>
									</Link>

							</div>
						</div>
					</div>
				</div>
				<div className="dashboard-container">
					<Switch>
						

						<Route exact path="/cards" exact>
							<Cards/>
						</Route>

						<Route path="/cards/:idNumber">
							<CardPage/>
						</Route>

						<Route path="/favorites">
							<Favorites/>
						</Route>


						<Route path="/folders">
							<Folders/>
						</Route>

						<Route path="/">
							<Folders/>
						</Route>
					</Switch>

				</div>
			</Router>
		</div>
		)
}
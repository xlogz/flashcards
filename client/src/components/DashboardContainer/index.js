import React from 'react';
import './styles.css';
import CardsContainer from '../CardsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Cards from "./Cards";
import Folders from "./Folders";
import Favorites from "./Favorites";
import CardPage from '../CardPage';
import NewSet from './NewSet';


import PostAddIcon from '@material-ui/icons/PostAdd';



export default function Container(props){
	return(
		<div className="dashboard-content">
		
				<div className="dashboard-sticky-container">
					<div className="dashboard-menu-container">
						<div className="dashboard">
							<div className="dashboard-title">Dashboard</div>
							<div className="dashboard-menu">
								<NavLink to="/home/folders" className={props === '/home' ? 'selected' : 'notActive'} exact activeClassName="selected">
									<div className="dashboard-menu-item-container">
										<div className="dashboard-menu-item">Folders</div>
									</div>
								</NavLink>
								<NavLink to="/home/cards" activeClassName="selected">
								<div className="dashboard-menu-item-container">
									<div className="dashboard-menu-item">Cards</div>
								</div>
								</NavLink>
								<NavLink to="/home/favorites" activeClassName="selected">
								<div className="dashboard-menu-item-container">
									<div className="dashboard-menu-item">Favorites</div>
								</div>
								</NavLink>

								<NavLink to="/home/newcard" activeClassName="selected">
								<div className="dashboard-menu-item-container">
									<div className="dashboard-menu-item"><PostAddIcon/></div>
								</div>
								</NavLink>

							</div>
						</div>
					</div>
				</div>
				<div className="dashboard-content-container">
					<Switch>
						

						<Route exact path="/home/cards">
							<Cards/>
						</Route>

						<Route exact path="/home/favorites">
							<Favorites/>
						</Route>


						<Route exact path="/home/folders">
							<Folders/>
						</Route>
						<Route exact path="/home/">
							<Folders/>
						</Route>

						<Route exact path="/home/newcard">
							<NewSet/>
						</Route>

						<Route path="/">
							<Folders/>
						</Route>
					</Switch>

				</div>
			
		</div>
		)
}
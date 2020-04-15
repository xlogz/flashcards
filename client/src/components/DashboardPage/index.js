import React from 'react';
import './styles.css';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import axios from 'axios';
import Cards from "./Cards";
import Folders from "./Folders";
import Favorites from "./Favorites";
import NewSet from './NewSet';



import PostAddIcon from '@material-ui/icons/PostAdd';



export default class Container extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pathname : window.location.pathname,
			folders: []
		}
	}

	fetchFolders = async() =>{
	 	console.log('fetching folders');
		await axios.get('/cards/folders',{headers:{userid : this.props.userId}}).then(results => {
			console.log(results);
			this.setState({folders: results.data});
			return this.state.folders;
		});
	}

	populateDropdown = () => {
		return this.state.folders.map(folder=>{
			return <option value={folder._id}>{folder.title}</option>
		})
	}

	handleClick = e => {
		this.setState({pathname : window.location.pathname});

	}



	
	
	render(){
		let pathname = window.location.pathname;
		return(
		<div className="dashboard-content">
		
				<div className="dashboard-sticky-container">
					<div className="dashboard-menu-container">
						<div className="dashboard">
							<div className="dashboard-title">Dashboard</div>
							<div className="dashboard-menu">
								<NavLink to="/home/folders" className={(pathname === '/home') ? 'selected' : 'notActive'} exact activeClassName="selected" >
									<div className="dashboard-menu-item-container">
										<div className="dashboard-menu-item">Folders</div>
									</div>
								</NavLink>
								<NavLink to="/home/cards" activeClassName="selected" onClick={this.handleClick}>
								<div className="dashboard-menu-item-container">
									<div className="dashboard-menu-item">Cards</div>
								</div>
								</NavLink>
								<NavLink to="/home/favorites" activeClassName="selected" onClick={this.handleClick}>
								<div className="dashboard-menu-item-container">
									<div className="dashboard-menu-item">Favorites</div>
								</div>
								</NavLink>

								<NavLink to="/home/newcard" activeClassName="selected" onClick={this.handleClick}>
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
							<Folders 
								userId={this.props.userId}
							/>
						</Route>
						<Route exact path="/home/">
							<Folders 
								userId={this.props.userId}
							/>
						</Route>

						<Route exact path="/home/newcard">
							<NewSet 
								userId={this.props.userId}
								fetchFolders = {this.fetchFolders}
								populateDropdown = {this.populateDropdown}
							/>
						</Route>

						<Route path="/">
							<Folders/>
						</Route>
					</Switch>

				</div>

			
		</div>
	
	
		)
		}
}
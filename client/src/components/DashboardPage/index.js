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
			currentFolderId: "",
			folders: [],
			cards: [],
			favorites: []
		}
	}

	deleteFolder = name => async(e) => {
		e.preventDefault();
		console.log(this.state.folders);
		console.log('this is the name of the delete folder class');
		console.log(name);
		if(this.state.folders.length < 1 ){
			//no folders to delete
		}else{
			console.log('attempting to delete folder');
			console.log(this.state.currentFolderId);

			await axios.delete('/cards/folders', {data: {folderId : this.state.currentFolderId}}).then(results => {
			console.log(this.state.currentFolderId);
			this.fetchFolders();
			this.setState({currentFolderId: this.state.folders[0]._id});
			console.log('new folder id after deleting: ' + this.state.currentFolderId)
			
			});

			document.getElementsByClassName(name)[0].style.display = 'none';
			document.getElementById("root").style.overflow = 'inherit';
		}
		
	}

	updateCurrentFolderId = (id) =>{
		this.setState({currentFolderId: id});
	}



	 populateDropdown = () => {
		console.log('populating dropdown');
		let firstFolderId = this.state.folders;
		console.log(this.state.currentFolderId);
		return this.state.folders.map((folder,index)=>{
			
			return <option value={folder._id}>{folder.title}</option>
		})

		
		
	}

	handleClick = e => {
		this.setState({pathname : window.location.pathname});

	}

	fetchFolders = async() => {
	 	console.log('fetching folders');
		await axios.get('/cards/folders',{headers:{userid : this.props.userId}}).then(async results => {
			await this.setState({folders: results.data});
			if(results.data[0] !== undefined){
				await this.setState({currentFolderId: results.data[0]._id});
				console.log('fetch folders folders ')
				console.log( this.state.folders);
				console.log(this.props.userId);
				console.log(this.state.currentFolderId);
				return results.data;
			}
			
		});
	}

	obtainCards = async (type,id) =>{
		if(type==="folder"){
			await axios.get('/cards/set', {headers: {folderid: id}}).then(cards => {
				this.setState({cards: cards.data}, function(){
					console.log(this.state.cards);
				});
				return this.state.cards;
			})
		}else if(type === "user"){
			await axios.get('/cards/set', {headers: {userid: id}}).then(cards => {
				this.setState({cards: cards.data}, function(){
					console.log(this.state.cards);
				});
				return this.state.cards;
			})
		}else if(type === "favorites"){
			console.log('obtaining favorite cards for user: ' + this.props.userId);
			await axios.get('/favorites/set',{headers: {userid: this.props.userId}}).then(cards =>{
				console.log(cards.data);
				this.setState({cards: cards.data}, function(){
					console.log(cards);
				})
			})
		}else{
			console.log('Incorrect input for obtainCards');
			return;
		}
		
	}



	 handleSelectChange = async e =>{
		console.log(e.target.value);
		await this.setState({currentFolderId: e.target.value});
		await this.obtainCards("folder",this.state.currentFolderId);
	}

	async componentDidMount(){
		await this.fetchFolders();
		console.log('currentFolderId '+this.state.currentFolderId);
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
							<Cards
								cards={this.state.cards}
								userId={this.props.userId}
								obtainCards = {this.obtainCards}/>
						</Route>

						<Route exact path="/home/favorites">
							<Favorites
								cards={this.state.cards}
								userId={this.props.userId}
								obtainCards = {this.obtainCards}
							/>
						</Route>


						<Route exact path="/home/folders">
							<Folders 
								userId={this.props.userId}
								handleSelectChange={this.handleSelectChange}
								populateDropdown = {this.populateDropdown}
								fetchFolders = {this.fetchFolders}
								deleteFolder = {this.deleteFolder}
								currentFolderId = {this.currentFolderId}
								updateCurrentFolderId = {this.updateCurrentFolderId}
								folders = {this.state.folders}
								obtainCards = {this.obtainCards}
								cards = {this.state.cards}
								updateUserId={this.props.updateUserId}
							/>
						</Route>
						<Route exact path="/home/">
							<Folders 
								userId={this.props.userId}
								handleSelectChange={this.handleSelectChange}
								populateDropdown = {this.populateDropdown}
								fetchFolders = {this.fetchFolders}
								deleteFolder = {this.deleteFolder}
								currentFolderId = {this.currentFolderId}
								updateCurrentFolderId = {this.updateCurrentFolderId}
								folders = {this.state.folders}
								obtainCards = {this.obtainCards}
								cards = {this.state.cards}
								updateUserId={this.props.updateUserId}
							/>
						</Route>

						<Route exact path="/home/newcard">
							<NewSet 
								userId={this.props.userId}
								handleSelectChange={this.handleSelectChange}
								fetchFolders = {this.fetchFolders}
								populateDropdown = {this.populateDropdown}
								currentFolderId = {this.state.currentFolderId}
								updateCurrentFolderId = {this.updateCurrentFolderId}
								folders = {this.state.folders}
							/>
						</Route>

						<Route path="/">
							<Folders
								userId={this.props.userId}
								handleSelectChange={this.handleSelectChange}
								populateDropdown = {this.populateDropdown}
								fetchFolders = {this.fetchFolders}
								deleteFolder = {this.deleteFolder}
								currentFolderId = {this.currentFolderId}
								updateCurrentFolderId = {this.updateCurrentFolderId}
								folders = {this.state.folders}
								obtainCards = {this.obtainCards}
								cards = {this.state.cards}
								updateUserId={this.props.updateUserId}
							/>
						</Route>
					</Switch>

				</div>

			
		</div>
	
	
		)
		}
}
import React from 'react';
import './styles.css';
import Dashboard from '../Dashboard';


export default function Container(){
	return(
		
		<div className="dashboard-content">
			<div className="dashboard-sticky-container">
				<div className="dashboard-menu-container">
					<div className="dashboard">
						<div className="dashboard-title">Dashboard</div>
						<div className="dashboard-menu">
							<div className="dashboard-menu-item-container selected">
								<div className="dashboard-menu-item">Folders</div>
							</div>

							<div className="dashboard-menu-item-container">
								<div className="dashboard-menu-item">Cards</div>
							</div>

							<div className="dashboard-menu-item-container">
								<div className="dashboard-menu-item">Favorites</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dashboard-container">

				<Dashboard/>

			</div>
		</div>

		)
}
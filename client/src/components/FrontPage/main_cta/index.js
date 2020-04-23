import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function MainCTA(props){
	return (
		<div className="main-cta-container">
			<div className="main-cta-left-column">
				<div className="main-cta-text-container">
					<h1>
						Learn your material<br/>
						faster than ever.
					</h1>
					<h3>
					And remember it.
					</h3>
					<Link to="/signup"><button className="main-cta-btn">Get Started!</button></Link>
				</div>

			</div>
			<div className="main-cta-right-column">
				<div className="main-cta-img-container">
					<img className="student-sitting-img" src="/images/student_sitting_lg_shadow.png"/>
				</div>
			</div>

			
		</div>
		)
}
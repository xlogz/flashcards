import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function LastCTA(props){
	return (
		<div className="last-cta-container">
			
			<div className="last-cta-right-column">
				<div className="last-cta-img-container">
					<img className="student-sitting-img" src="/images/student_sitting_lg_girl_shadow.png"/>
				</div>
			</div>
<div className="last-cta-left-column">
				<div className="last-cta-text-container">
					<h1>
						Let your terms stick.
					</h1>
					<h3>
					Don't ever forget that definition again!
					</h3>
					<Link to="/signup"><button className="last-cta-btn">Remember Now</button></Link>
				</div>

			</div>
			
		</div>
		)
}
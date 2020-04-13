import React from 'react';
import MainCTA from './main_cta';
import Swimlane from './swimlane';
import ThreeIcons from './three_icons'
import Quotes from './quotes'
import LastCTA from './last_cta'
import './styles.css'

export default function FrontPage(){
	return (
		<div className="front-page-container">
			<div className="front-page-content">
				<MainCTA/>
				<ThreeIcons/>
				<Swimlane/>
				<LastCTA/>
			</div>

		</div>
		)
}
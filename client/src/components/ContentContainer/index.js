import React from 'react';
import './styles.css';
import Container from '../Container'
import Dashboard from '../Dashboard'

export default function ContentContainer(){
	return(
		<div className="container">
			<Container>
				<Dashboard/>
			</Container>
		</div>

		)
}
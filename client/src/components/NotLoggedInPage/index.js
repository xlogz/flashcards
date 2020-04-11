import React from 'react';
import {Link} from 'react-router-dom'

export default function NotLoggedInPage(){
	return (
		<div>
			You must log in to access this page.
			Please <Link to="/login/">click here</Link> to log in.

		</div>)
}
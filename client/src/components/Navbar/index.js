import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";
import PostAddIcon from '@material-ui/icons/PostAdd';

export default function NavBar() {
	return (

		<div className="navbar">
            <div className="navbar-content">
            <div className="logo menu-item">
                Quizme
            </div>
            <div className="menu-item">
                <Link to="/home/folders">Home</Link>
            </div>
            <div className="menu-item">
                <Link to="/flashcards">Flashcards</Link>
            </div>
            <div className="menu-item">
                <Link to="/search">Search</Link>
            </div>
            

            <div className="right-side">
                <div className="navbar-new-set"><PostAddIcon/></div>
                <div className="login-link menu-item">
                    <Link to="/login">Login</Link>
                </div>
                <div className="sign-up-btn menu-item">

                    Sign Up
                </div>

            </div>
            </div>

		</div>
			



		)
}
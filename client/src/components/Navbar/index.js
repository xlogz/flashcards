import React from 'react'
import './styles.css';

export default function NavBar() {
	return (

		<div className="navbar">
            <div className="logo menu-item">
                Quizme
            </div>
            <div className="menu-item">
                Home
            </div>
            <div className="menu-item">
                Search
            </div>
            <div className="menu-item">
                Flashcards
            </div>

            <div className="right-side">
                <div className="login-link menu-item">
                    Login
                </div>
                <div className="sign-up-btn menu-item">

                    Sign Up
                </div>

            </div>


		</div>
			



		)
}
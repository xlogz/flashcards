import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";
import PostAddIcon from '@material-ui/icons/PostAdd';




export default class NavBar extends React.Component {

    constructor(props){
        super(props);
    }

    handleClick(){
       let searchText = document.getElementsByClassName("navbar-search-text")[0];
       let searchUnderline = document.getElementsByClassName("navbar-search-underline")[0];
       console.log(searchUnderline)
       searchUnderline.style.opacity = 1;
       searchUnderline.style.width = "200px";
    }

    logOut(){
        this.props.logOut();
        console.log('logged out');
    }

    render(){

        const loginSignUp =  (
                <div>
                <div className="login-link menu-item">
                    <Link to="/login">Login</Link>
                </div>

                <Link to="/signup">
                    <div className="sign-up-btn menu-item">

                    Sign Up

                    </div>
                </Link>
                </div>);


        const newCard = (
            <div>
                <div className="navbar-new-set">
                    <Link to="/home/newcard">
                        <PostAddIcon/>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link to="/" onClick={this.props.logOut}>Logout</Link>
                </div>
            </div>)

        const folders = (
            <Link to="/home/folders">Home</Link>
            )
        const frontPage = (
            <Link to="/home/">Home</Link>)

        return (

        <div className="navbar">
            <div className="navbar-content">
            <div className="logo menu-item">
                Quizme
            </div>
            <div className="menu-item">
                {this.props.loggedIn ? folders : frontPage}
            </div>
            <div className="menu-item">
                <Link to="/flashcards">Flashcards</Link>
            </div>
            <div className="menu-item search" onClick={this.handleClick.bind(this)}>

                <div className="navbar-search-text">
                    <Link to="/search">
                        Search
                    </Link>
                </div>

                <div className="navbar-search-underline">&nbsp;</div>
            </div>
            

            <div className="right-side">
                { this.props.loggedIn && newCard}
                { !this.props.loggedIn && loginSignUp}

            </div>
            </div>

        </div>
            



        )
    }
	
}
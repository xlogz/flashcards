import React from 'react';
import NavBar from './components/Navbar'
import ContentContainer from './components/ContentContainer'
import {
  BrowserRouter as Router,
} from "react-router-dom";


export default function SimpleContainer() {
  return (
    
    <React.Fragment>
    <NavBar/>
    <Router>
    	<ContentContainer/>
    </Router>
    </React.Fragment>
  );
}
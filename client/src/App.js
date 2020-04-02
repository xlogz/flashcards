import React from 'react';
import NavBar from './components/Navbar'
import ContentContainer from './components/ContentContainer'
import {
  BrowserRouter as Router,
} from "react-router-dom";


export default function SimpleContainer() {
  return (
    
    <React.Fragment>
    <Router>
    <NavBar/>
    
    	<ContentContainer/>
    </Router>
    </React.Fragment>
  );
}
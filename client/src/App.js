import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from './components/Navbar'
import Container from './components/Container'

export default function SimpleContainer() {
  return (
    
    <React.Fragment>
    <NavBar/>
    <Container/>

    </React.Fragment>
  );
}
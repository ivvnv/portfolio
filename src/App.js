import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ivana Rivera",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "#girlontech",
        subtitle: "Building the future from within",
        text: "You can check out my projects below ↓",
      },
      about: {
        title: "hi there!",
      },
      contact: {
        title: "let's catch up",
        text: "To contact me or see all my work and experiences, check out my socials down here",
      },
    };
  }
  render() {
    return (
      <Router>
       <Route path='/' exact render={() => <LandingPage/> } />
          
          
          <Route path='/home' exact render={() => <HomePage subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} text={this.state.contact.text} />} />
      
        {/* <Footer /> */}
        {/* </Container> */}
        
      </Router>
    );
  }
}




export default App;

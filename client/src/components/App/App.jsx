// This is the main component to hold all over components
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import MainProfile from '../Profile/Profile'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="testing">
          <Route path="/" render={() => <MainProfile />} /> 
          <Route path="/" render={() => <LandingPage />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
        </div>
      </Router>
    );
  }
}

export default App;

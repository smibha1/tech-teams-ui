// This is the main component to hold all over components
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Questions from '../Questions/Questions';
import MainProfile from '../Profile/Profile';
import NavBar from '../NavBar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route path="/username" component={NavBar} />
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route exact path="/" component={LandingPage}/> 
            </Switch>
              <Route path="/questions" component={Questions } />
              <Route path="/username" component={MainProfile}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

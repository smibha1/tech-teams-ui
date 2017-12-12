// This is the main component to hold all over components
import React from 'react';
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> [fix]
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Questions from '../Questions/Questions';
import MainProfile from '../Profile/Profile';
import NavBar from '../NavBar/NavBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  render() {
    return (<Router>
      <Switch>
        <div>
<<<<<<< HEAD
          <Route path="/profile" render={() => <MainProfile/>}/>
          <Route exact path="/" render={() => <LandingPage/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="/signup" render={() => <Signup/>}/>
=======
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/signup" render={() => <Signup />} />
          </Switch>
          <Route path="/username" render={() => <NavBar />} />
          <Route path="/username/profile" render={() => <MainProfile />} />
          <Route path="/signup/questions" render={() => <Questions />} />
>>>>>>> [fix]
        </div>
      </Switch>
    </Router>);
  }
}

export default App;

// This is the main component to hold all over components
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Auth/Login';
import Signup from '../../containers/Auth/Signup';
import Questions from '../../containers/Questions/Questions';
import MainProfile from '../../containers/Profile/ProfileContainer';
import NavBar from '../NavBar/NavBar';
import ProjectProfile from '../../containers/ProjectProfile/ProjectProfileContainer';
import SearchUsersResults from '../../containers/SearchUsersResults/SearchUsersResults';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route path="/username" component={NavBar} />
              <Route path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
            <Route path="/signup/questions" component={Questions} />
            <Route path='/username/profile' component={MainProfile} />
            <Route path="/project/:id" component={ProjectProfile} />
            <Route path="/usersearch" component={SearchUsersResults} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

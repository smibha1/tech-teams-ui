import React from 'react';
import DevInfoContainer from '../../containers/Profile/DevInfoContainer';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
import CurrentProjectsContainer from '../../containers/Profile/CurrentProjectsContainer';
import CompletedProjectsContainer from '../../containers/Profile/CompletedProjectsContainer';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this.props', this.props)
    // this.props.setUserProfileInformation( {name:'kitty'})
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    console.log('COMP DID MOUNT', jwtDecode(localStorage.getItem('token')).email);
    let email = jwtDecode(localStorage.getItem('token')).email;
    let context = this;
    console.log(email, context);
    axios({
      url: 'http://localhost:3000/profile',
      method: 'get'
    }).then(data => {
      console.log('IN AXIOS, data=', data);
      context.setState({
        loading: false
      })
      console.log(this.props)
      this.props.setUserProfileInformation( {name:'kitty'})
    }).catch(err => {
      console.log('axios error=', err);
    })
    console.log('AFTER BITCH');
  }

  render() {
    return (<div id="profilePage-container">
      <div id="profilePage-background"></div>
      <DevInfoContainer/>
      <br/>
      <TechnicalSkillsContainer/>
      <br/>
      <CurrentProjectsContainer/>
      <br/>
      <CompletedProjectsContainer/>
    </div>)
  }
}

export default Profile;

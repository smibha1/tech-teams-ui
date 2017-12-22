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

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    if (localStorage.getItem('token') !== 'null') {
      axios({url: 'http://localhost:3000/profile', method: 'get'}).then(data => {
        console.log('IN AXIOS, data=', data);
        let infoObj = data.data.info;
        this.props.updateDevInfo({
          name: infoObj.name,
          imageurl: 'http://bit.ly/2BZ5lT6',
          title: infoObj.title,
          location: infoObj.location,
          description: infoObj.description,
          availability: infoObj.availability,
        })
        JSON.parse(infoObj.tech).forEach(chip => {
            this.props.addtechskill(chip);
          })

        this.props.updateCurrentProjects(data.data.positions)
      }).catch(err => {
        console.log('axios error=', err);
      })
    } else {
      this.props.history.push('/login');
    }

  }

  render() {
    return (<div id="profilePage-container">
      <div id="profilePage-background"></div>
      <DevInfoContainer/>
      <br/>
      <TechnicalSkillsContainer/>
      <br/>
      <CurrentProjectsContainer history={this.props.history} />
      <br/>
      <CompletedProjectsContainer history={this.props.history}/>
    </div>)
  }
}

export default Profile;

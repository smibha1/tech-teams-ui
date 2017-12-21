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
    let data = {
      name: 'Shaniqua Anastasia',
      imageurl: 'https://png.icons8.com/metro/540/edit-user-male.png',
      title: 'Developer',
      location: 'Los Angeles, CA',
      description: 'I love Agile and stuff!',
      availability: 'true',
      projects: `[ {
        name: 'Cat Hoarders United',
        position: 'Developer',
        headquarters: 'Los Angeles',
        description: 'Let\'s get all the cats together!',
        imageurl: 'https://png.icons8.com/metro/540/edit-user-male.png'
        techstack: '['react', 'angular', 'mongodb']'
      },
      {
        name: 'DevDates',
        position: 'Developer',
        headquarters: 'Los Angeles',
        description: 'Making the world a better place',
        imageurl: 'https://png.icons8.com/metro/540/edit-user-male.png'
        techstack: '['react', 'angular', 'mongodb']'

      }
      ]`,
      tech: ['react', 'angular', 'mongodb', 'nodejs']
    }

    // var techParse = JSON.parse(data.tech)
    for (var i = 0; i < data.tech.length; i++) {
      this.props.addtechskill(data.tech[i])
    }
    this.props.addusername(data.name)
    this.props.adduserlocation(data.location)
    this.props.adduserimageurl(data.imageurl)
    this.props.adduserdescription(data.description)
    this.props.adduseravailability(data.availability)
    this.props.addusertitle(data.title)
    this.props.addusertitle(data.title)

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    if (localStorage.getItem('token') !== 'null') {
      axios({url: 'http://localhost:3000/profile', method: 'get'}).then(data => {
        console.log('IN AXIOS, data=', data);
      }).catch(err => {
        console.log('axios error=', err);
      })
    } else {
      this.props.history.push('/login');
    }

  }

  render() {
    console.log('*********this.props= ', this.props)
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

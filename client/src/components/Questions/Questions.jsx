import React from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import swal from 'sweetalert2';
import $ from 'jquery';
import axios from 'axios';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  handleQuestionsSubmit(e) {
    e.preventDefault();
    const positionObj = {
      0: 'Scrum Master',
      1: 'Developer',
      2: 'Project Owner',
    };
    const radioArray = [$('#scrumMaster:checked').val(), $('#developer:checked').val(), $('#projectOwner:checked').val(), $('#otherRadio:checked').val()];
    const key = radioArray.indexOf('on');
    let position;
    const location = $('#location').val();
    const aboutMe = $('#aboutMe').val();
    const available = $('#available:checked').val();
    const other = $('#other').val();
    let tech = JSON.stringify([]);

    const newUser = {
      email: this.props.email,
      name: this.props.username,
      location: location,
      description: aboutMe,
      available: JSON.stringify(available === 'on'),
      imageurl: '',
      tech: tech
    };

    let username = this.props.email.split('@')[0];
    let email = this.props.email;
    let password = this.props.password;
    console.log(username, email, password);


    if (!(location && aboutMe) || key === -1 || (key === 3 && !other)) {
      swal({
        title: 'Oops!',
        text: 'Please fill everything out!',
        type: 'error',
        timer: 1000,
        showConfirmButton: false,
      });
    } else {
      newUser.position = positionObj[key] || other;
      axios({
        method: 'post',
        url: 'http://localhost:3000/signup',
        data: newUser
      }).then(res => {
        console.log(res);
        if (res.status === 200) {
          axios({
            url: 'http://localhost:3000/login',
            method: 'post',
            data: { email, password }
          }).then(res => {
            swal({
              title: 'Creating Profile',
              type: 'success',
              text: `taking you to your profile now!`,
              showConfirmButton: true,
            }).then(() => {
              localStorage.setItem('token', res.data.accessToken);
              this.props.history.push(`/username/profile`)
            })
          })
        }
      })

    }
  }

  render() {
    return (<div id="questions-container">
      <h1>Getting Started</h1>
      <form onSubmit={this.handleQuestionsSubmit.bind(this)}>
        <fieldset className="legend-brdr-bttm">
          <div className="radio-inline">
            <label className="custom-control custom-radio">
              <input id="scrumMaster" name="radio" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator" />
              <span className="custom-control-description">Scrum Master</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="developer" name="radio" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator" />
              <span className="custom-control-description">Developer</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="projectOwner" name="radio" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator" />
              <span className="custom-control-description">Project Owner</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="otherRadio" name="radio" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator" />
              <span className="custom-control-description">Other</span>
              <span className="form-group">
                <label htmlFor="Other" />
                <input type="text" id="other" className="form-control" placeholder="UI/UX" />
              </span>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Location">Location</label>
            <input type="text" id="location" className="form-control" placeholder="Los Angeles, CA" />
          </div>
          <div className="form-group">
            <label htmlFor="AboutMe">About Me</label>
            <input type="text" id="aboutMe" className="form-control" placeholder="Tell us about yourself" />
          </div>
          <div className="checkbox">
            <label className="switch">
              <input id="available" className="checkbox" type="checkbox" />
              <span className="slider round" />
            </label>
            <label>
              Available to Join a Team
            </label>
          </div>
            <button type="submit" className="btn btn-primary">Create Profile</button>
        </fieldset>
      </form>
    </div>);
  }
}

export default Questions;

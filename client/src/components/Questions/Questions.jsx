import React from 'react';
import {Link} from 'react-router-dom';
import './Questions.css';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import swal from 'sweetalert2';
import $ from 'jquery';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSelected: true,
      radioSelection: 'scrumMaster',
      isAvailable: true,
    }
  }

  handleQuestionsSubmit(e) {
    e.preventDefault();

    let position;
    const location = $('#location').val();
    const aboutMe = $('#aboutMe').val();
    const available = this.state.isAvailable;
    const other = $('#otherText').val();
    let tech = JSON.stringify([]);
    console.log('hi', $('#location').val(), aboutMe, available, other, tech);

    const newUser = {
      email: this.props.email,
      name: this.props.username,
      location: location,
      description: aboutMe,
      available: JSON.stringify(available),
      imageurl: '',
      tech: tech
    };

    let username = this.props.email.split('@')[0];
    let email = this.props.email;
    let password = this.props.password;

    // add loading sweet alert with axios call
    // to show user that click actually worked and we are working on it

    if (!(location && aboutMe && this.state.radioSelection)) {
      swal({title: 'Oops!', text: 'Please fill everything out!', type: 'error', timer: 1000, showConfirmButton: false});
    } else {
      console.log('sweet alert else', this.state.radioSelection)
      newUser.position = this.state.radioSelection;
      axios({method: 'post', url: 'http://localhost:3000/signup', data: newUser}).then(res => {
        if (res.status === 200) {
          axios({
            url: 'http://localhost:3000/login',
            method: 'post',
            data: {
              email,
              password
            }
          }).then(res => {
            swal({title: 'Creating Profile', type: 'success', text: `taking you to your profile now!`, showConfirmButton: true}).then(() => {
              localStorage.setItem('token', res.data.accessToken);
              axios.defaults.headers.common['Authorization'] = res.data.accessToken;
              console.log('ACCESS TOKEN FROM CLIENT:', res.data.accessToken, ' HEADERS=', window.headers);
              this.props.history.push('/username/profile');
            }).catch((err) => {
              console.log('error', err)
            })

          })
        }
      }).catch((err) => {
        swal({type: 'error', title: 'Uh oh!', text: err, showConfirmButton: true})
        console.log('error', err)
      })
    }
  }

  render() {
    return (<div id="overlayQuestions">
      <div id="questions-container">
        <h2 id="questionsTitle">Getting Started</h2>
        <form id="innerQuestions-container" onSubmit={this.handleQuestionsSubmit.bind(this)}>
          <div id="professionText-container">
            <i id="professionIcon" className="fa fa-users fa-lg" aria-hidden="true"></i>
            <span id="professionText">Profession</span>
          </div>
          <fieldset id="radioButtonGroup-container" className="legend-brdr-bttm">
            <RadioButtonGroup id="radioButtonGroup" name="Profession" defaultSelected="scrumMaster" style={{
                maxWidth: 200
              }} onChange={(event, value) => {
                if (value !== 'other') {
                  this.setState({radioSelection: value, otherSelected: true})
                } else {
                  this.setState({radioSelection: '', otherSelected: false});
                }
              }}>
              <RadioButton id="scrumMaster" value="scrumMaster" label="Scrum Master" style={{
                  marginBottom: 14
                }}/>
              <RadioButton id="developer" value="developer" label="Developer" style={{
                  marginBottom: 14
                }}/>
              <RadioButton id="productOwner" value="productOwner" label="Product Owner" style={{
                  marginBottom: 14
                }}/>
              <RadioButton id="otherRadio" value="other" label="Other" style={{
                  maxWidth: 10
                }}/>
            </RadioButtonGroup>
          </fieldset>
          <div id="otherText-container">
            <TextField id="otherText" hintText="UI/UX" disabled={this.state.otherSelected} style={{
                maxWidth: 170
              }} underlineFocusStyle={{
                borderColor: '#55bed5'
              }} underlineStyle={{
                borderColor: '#55bed5'
              }} onChange={(event, value) => {
                this.setState({radioSelection: value})
                console.log('hat', value)
              }
}/>
          </div>
          <br/>
          <i className="fa fa-globe fa-2x" aria-hidden="true"></i>&nbsp;

          <TextField id="location" hintText="Los Angeles, CA" floatingLabelText="Location" floatingLabelFocusStyle={{
              color: '#55bed5'
            }} underlineFocusStyle={{
              borderColor: '#55bed5'
            }} underlineStyle={{
              borderColor: '#55bed5'
            }}/><br/>
          <i className="fa fa-id-card-o fa-lg" aria-hidden="true"></i>&nbsp;
          <TextField id="aboutMe" hintText="Tell us about yourself" floatingLabelText="A little about me" floatingLabelFocusStyle={{
              color: '#55bed5'
            }} underlineFocusStyle={{
              borderColor: '#55bed5'
            }} underlineStyle={{
              borderColor: '#55bed5'
            }} style={{
              marginBottom: 40
            }}/><br/>
          <div id="availabilitySilder-container" className="checkbox">
            <Toggle id="availabilitySilder" label="Available to Join a Team" defaultToggled={true} style={{
                maxWidth: 300
              }} onToggle={(value, isInputChecked) => {
              this.setState({
                isAvailable: isInputChecked,
              })
            }
            }/>
          </div>
          <button id="createProfileButton" type="submit" className="btn btn-primary">Create Profile
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>);
  }
}

export default Questions;

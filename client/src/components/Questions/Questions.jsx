import React from 'react';
import {Link} from 'react-router-dom';
import './Questions.css';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
<<<<<<< HEAD
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
=======
import swal from 'sweetalert2';
import $ from 'jquery';
>>>>>>> [ops]

class Questions extends React.Component {
  constructor(props){
    super(props);
  }

  handleQuestionsSubmit(e) {
    e.preventDefault();
    // let email = props.email;
    // let name = props.name;

    let positionObj = {
      0: 'Scrum Master',
      1: 'Developer',
      2: 'Project Owner'
    }
    let radioArray = [$('#scrumMaster:checked').val(), $('#developer:checked').val(), $('#projectOwner:checked').val(), $('#otherRadio:checked').val()]
    let key = radioArray.indexOf('on');
    let position;
    let location = $('#location').val();
    let aboutMe = $('#aboutMe').val();
    let available = $('#available:checked').val();
    let other = $('#other').val();

    const newUser = {
      email: 'email',
      name: 'full name',
      location: location,
      aboutMe: aboutMe,
      available: available === 'on',
    }
    if (!(location && aboutMe) || key === -1 || (key === 3 && !other)) {
      alert('PLEASE FILL EVERTHING OUT')
    } else {
      newUser['position'] = positionObj[key];
      swal({
        title: 'Creating Profile',
        type: 'success',
        text: 'Answers: ' + JSON.stringify(newUser),
        showConfirmButton: true
      })
    }

  }

  render() {
<<<<<<< HEAD
    return (
      <div id="overlayQuestions">
      <div id="questions-container">
        <h1>Getting Started</h1>
        <form onSubmit={this.handleTitle1Change}>
          <fieldset className="legend-brdr-bttm" >
=======
    return (<div id="questions-container">
      <h1>Getting Started</h1>
      <form onSubmit={this.handleQuestionsSubmit}>
        <fieldset className="legend-brdr-bttm">
>>>>>>> [ops]
          <div className="radio-inline">
            <label className="custom-control custom-radio">
              <input id="scrumMaster" name="radio" type="radio" className="custom-control-input"/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Scrum Master</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="developer" name="radio" type="radio" className="custom-control-input"/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Developer</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="projectOwner" name="radio" type="radio" className="custom-control-input"/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Project Owner</span>
            </label>
            <label className="custom-control custom-radio">
              <input id="otherRadio" name="radio" type="radio" className="custom-control-input"/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Other</span>
              <span className="form-group">
                <label htmlFor="Other"></label>
                <input type="text" id="other" className="form-control" placeholder="UI/UX"/>
              </span>
            </label>
          </div>
<<<<<<< HEAD
            <div className="form-group">
              <label htmlFor="Location">Location</label>
              <input type="text" id="location" className="form-control" placeholder="Los Angeles, CA"/>
            </div>
            <TechnicalSkillsContainer />
            <div className="form-group">
              <label htmlFor="AboutMe">About Me</label>
              <input type="text" id="aboutMe" className="form-control" placeholder="Tell us about yourself"/>
            </div>
            <div className="checkbox">
              <label>
                <input id="available" type="checkbox"/> Available to Join a Team
              </label>
            </div>
            <label class="switch">

  <input className="checkbox" type="checkbox"/>
  
  <span id="available" class="slider round">
  
  </span>
</label>
            <Link to = "/username/profile">
            <button type="submit" className="btn btn-primary">Create Profile</button>
            </Link>
          </fieldset>
        </form>
        </div>
      </div>
    );
=======
          <div className="form-group">
            <label htmlFor="Location">Location</label>
            <input type="text" id="location" className="form-control" placeholder="Los Angeles, CA"/>
          </div>
          <TechnicalSkillsContainer/>
          <div className="form-group">
            <label htmlFor="AboutMe">About Me</label>
            <input type="text" id="aboutMe" className="form-control" placeholder="Tell us about yourself"/>
          </div>
          <div className="checkbox">
            <label>
              <input id="available" type="checkbox"/>
              Available to Join a Team
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Create Profile</button>
        </fieldset>
      </form>

    </div>);
>>>>>>> [ops]
  }
}

export default Questions;

import React from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';
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

class Questions extends React.Component {
  handleTitle1Change(e) {
    e.preventDefault();
    console.log('target value',e.target);
  }

  render() {
    return (
      <div id="overlayQuestions">
      <div id="questions-container">
        <h1>Getting Started</h1>
        <form onSubmit={this.handleTitle1Change}>
          <fieldset className="legend-brdr-bttm" >
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
  }
}

export default Questions;


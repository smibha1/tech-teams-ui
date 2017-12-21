import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'
import { Link, Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

class CurrentProjects extends React.Component {
  constructor(props) {
    super(props);

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(element) {
    // PROB DON'T NEED THE BELOW VARIABLE FOR THIS, BUT KEEP JUST IN CASE
    // const grabDiv = document.getElementById(`prof-completed-${element.projName}`).getAttribute('index');
    this.props.updateProjectProfilePage(element.projName);
    this.props.history.push(`/project/${element.projName}`)
  }

  render() {
    return (
      <div id="currentProjects-container">
        Current Projects <br />
        <div id="newdivider"> </div>
        {
          this.props.currentProjects.currentProjs.map((element, index) => (
            <div
            key={index}
            id={`prof-completed-${element.projName}`}
            index={index}
            onClick={() => this.selectProject(element)}
            >
              {element.projName} || {element.projRole} <br />
              {element.projDesc}
            </div>
          ))
        }
      </div>
    );
  }
}


export default CurrentProjects;

CurrentProjects.propTypes = {
  currentProjects: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

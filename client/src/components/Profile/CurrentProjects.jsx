import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'
import { Link, Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

class CurrentProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjects: this.props.currentProjects,
    }

    this.selectProject = this.selectProject.bind(this);
  }

  componentDidMount() {
    console.log('CURRENT PROJ CDM: ', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('CURRENT PROJ CWRP: ', nextProps);
    const { currentProjects } = nextProps;
    this.setState({
      currentProjects,
    })
  }

  selectProject(element) {
    // PROB DON'T NEED THE BELOW VARIABLE FOR THIS, BUT KEEP JUST IN CASE
    // const grabDiv = document.getElementById(`prof-completed-${element.projName}`).getAttribute('index');
    this.props.updateProjectProfilePage(element.project);
    this.props.history.push(`/project/${element.project}`)
  }

  render() {
    return (
      <div id="currentProjects-container">
        Current Projects <br />
        <div id="newdivider"> </div>
        {
          this.state.currentProjects.map((element, index) => (
            <div
            key={index}
            id={`prof-completed-${element.project}`}
            index={index}
            onClick={() => this.selectProject(element)}
            >
              {element.project} || {element.title} <br />
              {element.projectdescription}
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

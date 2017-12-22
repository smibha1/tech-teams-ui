import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Collapsible, CollapsibleItem} from 'react-materialize'

class CurrentProjects extends React.Component {
  constructor(props) {
    super(props);

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(element) {
    const grabDiv = document.getElementById(`prof-completed-${element.projName}`).getAttribute('index');
    console.log('CLICKED ON CURRENT PROJECTS NO.', grabDiv);
  }

  render() {
    return (
      <div id="currentProjects-container">
        Completed Projects <br />
        
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

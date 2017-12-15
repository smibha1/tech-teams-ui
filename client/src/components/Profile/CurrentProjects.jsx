import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        Completed Projects <br />
        <br />
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

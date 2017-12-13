import React from 'react';
import PropTypes from 'prop-types';

class CompletedProjects extends React.Component {
  constructor(props) {
    super(props);

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(element) {
    const grabDiv = document.getElementById(`prof-completed-${element.projName}`).getAttribute('index');
    console.log('CLICKED ON COMPLETED PROJECTS NO.', grabDiv);
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        Completed Projects <br />
        -------------------------- <br />
        {
          this.props.completedProjects.completedProjs.map((element, index) => (
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

export default CompletedProjects;

CompletedProjects.propTypes = {
  completedProjects: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

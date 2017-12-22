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
      <div id="completedProjects-container">
        {console.log(this.props)}
        Completed Projects <br />
        <div id="accordion" role="tablist" aria-multiselectable="true">
  <div className="card">
    <div className="card-header" role="tab" id="headingOne">
      <h5 className="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
      <div className="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  </div>
        <div id="newdivider"> </div>
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

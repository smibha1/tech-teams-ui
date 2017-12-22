import React from 'react';
import ProjectTeamMember from './ProjectTeamMember';
import OpenPositions from './OpenPositions';

class ProjectTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: '',
    };
  }
  
  componentDidMount() {
    console.log('when do iget hit?? the last component')
  }

  addPos() {
    console.log('CLICKED');
  }

  render() {
    return (
      <div>
        Meet the Team: 

        {this.props.teammembers.map(
          (element, index) => <ProjectTeamMember member={element} key={index} />)
        }
        <br />
        Open Position:
        {this.props.openPositions.map(
          (element, index) => <OpenPositions element={element} key={index} />)
        }
        <br />
        <div className="add-position" onClick={this.addPos}>
          <img src="http://bit.ly/2BbiNQk" alt="Add Position" height="75px" />
          <span> Add position </span>
        </div>
      </div>
    );
  }
}

export default ProjectTeam;

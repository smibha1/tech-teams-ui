import React from 'react';
import ProjectTeamMember from './ProjectTeamMember';
import OpenPositions from './OpenPositions';

class ProjectTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTeam: this.props.projectTeam,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(this.props.projectTeam)
    console.log('DISPLAY DISPLAY DISPLAY ', nextProps.projectTeam.projectTeam);
    this.setState({
      projectTeam: nextProps.projectTeam.projectTeam
    })
  }

  addPos() {
    console.log('CLICKED');
  }

  render() {
    return (
      <div>
        Meet the Team: 

        {this.state.projectTeam.map(
          (element, index) => <ProjectTeamMember member={element} key={index} />)
        }
        <br />
        Open Position:
        {/* {this.props.openPositions.map(
          (element, index) => <OpenPositions element={element} key={index} />)
        } */}
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

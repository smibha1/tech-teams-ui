import React from 'react';
import ProjectTeamMember from './ProjectTeamMember';
import OpenPositions from './OpenPositions';
import CreatePosition from '../CreatePosition/CreatePosition';

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
      <div id="projectTeam-contatiner" >
        <span id="projectText"> Meet the Team </span>
        <div id="newdivider"> </div>

        {this.state.projectTeam.map(
          (element, index) => <ProjectTeamMember member={element} key={index} />)
        }
        <br />
        {/* {this.props.openPositions.map(
          (element, index) => <OpenPositions element={element} key={index} />)
        } */}
        <br />
        <div className="add-position" onClick={this.addPos}>
          <CreatePosition/>
          <span> Add position </span>
          {/* <img src="http://bit.ly/2BbiNQk" alt="Add Position" height="75px" /> */}
        </div>
        </div>
    );
  }
}

export default ProjectTeam;

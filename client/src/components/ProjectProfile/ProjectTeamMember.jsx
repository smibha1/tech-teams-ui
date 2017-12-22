import React from 'react';
import './ProjectProfile.css';

class ProjectTeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ editMode: !this.state.editMode });
  }
  
  removeMember(event) {
    // console.log(JSON.stringify(event.target.name));
  }

  render() {
    return (
      <div id="individualTeamMember-contatiner">
        <img className="teammember" src={this.props.member.image} alt={this.props.member.name} />
        <span> {this.props.member.name} </span>
        {this.state.editMode ?
          <button
            onClick={this.removeMember}
            name={this.props.index}> X
          </button> : null
        }

        <button className="btn-edit" onClick={this.toggleEdit}> 
        <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}


export default ProjectTeamMember;

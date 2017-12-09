import React from 'react';

class TechnicalSkills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // techSkills: this.props.techSkills,
      editMode: false,
      addSkill: '',
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.newSkillInput = this.newSkillInput.bind(this);
    this.saveNewSkill = this.saveNewSkill.bind(this);
    // this.deleteSkill = this.deleteSkill.bind(this);
  }

  toggleEdit() {
    this.setState({ editMode: !this.state.editMode });
  }

  newSkillInput(event) {
    this.setState({ addSkill: event.target.value });
  }

  saveNewSkill() {
    this.props.techSkills.push(this.state.addSkill);
    this.setState({ addSkill: '' });
    this.props.updateTechSkill(this.props.techSkills);
  }

  deleteSkill(element) {
    let selected = document.getElementById(`prof-techSkill-${element}`).getAttribute('index');
    let propsCopy = this.props.techSkills.slice();
    propsCopy.splice(selected, 1);
    this.props.updateTechSkill(propsCopy);
  }

  render() {
    return (
      <div className="profileContainer">
        Technical Skills <br />
        <button onClick={this.toggleEdit}> Edit </button> <br />
        ---------------- <br />

        {this.state.editMode ?
          <div>
            <input
              placeholder="Add New Skill"
              value={this.state.addSkill}
              onChange={this.newSkillInput}
            />
            <button onClick={this.saveNewSkill}> Save </button>
          </div>
        : null} <br />

        {this.props.techSkills.map( (element, index) => {
          return (
            <span key={index} id={`prof-techSkill-${element}`} index={index}>
              {element}
              {this.state.editMode ? <button onClick={()=> this.deleteSkill(element)}> X </button> : null}
            </span>

          );
        })}

      </div>
    );
  }
}

export default TechnicalSkills;

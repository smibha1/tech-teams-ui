<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'
=======
import React from 'react';
import Chip from 'material-ui/Chip';
>>>>>>> 63186a5acd2cec95a9aa9fa61f29a315c9c26196

class TechnicalSkills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editMode: true,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    });
    //This is where the post request gets added 
  }

  onBeforeRequestAdd (chip) {
    return chip.length >= 3
  }

  handleRequestAdd (chip) {
    console.log('hello', chip)
    this.props.addtechskill(chip)
  }

  handleRequestDelete (deletedChip) {
    this.props.deletetechskill(deletedChip);
  }

<<<<<<< HEAD
  render () {
    return (
      <div id="technicalSkills-container">
=======
  render() {
    return (
    <div className="technicalSkills-container">
>>>>>>> 63186a5acd2cec95a9aa9fa61f29a315c9c26196
      Technical Skills
      <br/>
      <button onClick={this.toggleEdit}>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <br/>
<<<<<<< HEAD
      <div id="newdivider"></div>
    <ChipInput
      value={this.props.techskills}
      onBeforeRequestAdd={(chip) => this.onBeforeRequestAdd(chip)}
      onRequestAdd={(chip) => this.handleRequestAdd(chip)}
      onRequestDelete={(deletedChip) => this.handleRequestDelete(deletedChip)}
      onBlur={(event) => {
        if (this.props.addOnBlur && event.target.value) {
          this.handleRequestAdd(event.target.value)
        }
      }}
      fullWidth
      floatingLabelText='Technical Skills'
      disabled ={this.state.editMode}
    />
    </div>
    )
=======
      ----------------
      <br/> {
        this.state.editMode
          ? <div>
              <input placeholder="Add New Skill" value={this.state.addSkill} onChange={this.newSkillInput}/>
              <button onClick={this.saveNewSkill}>
                Save
              </button>
            </div>
          : null
      }
      <br/> {
        this.props.techSkills.map((element, index) => {
          return (<Chip key={index} id={`prof-techSkill-${element}`} index={index}>
            {element}
            {
              this.state.editMode
                ? <button onClick={(e) => {
                      e.preventDefault();
                      this.deleteSkill(element)
                    }}><strong>x</strong></button>
                : null
            }
          </Chip>);
        })
      }
    </div>
    );
>>>>>>> 63186a5acd2cec95a9aa9fa61f29a315c9c26196
  }
}

TechnicalSkills.propTypes = {
  addOnBlur: PropTypes.bool,
  techskills: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}

export default TechnicalSkills
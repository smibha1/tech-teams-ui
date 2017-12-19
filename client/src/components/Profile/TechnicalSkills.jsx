import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'

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

  render () {
    return (
      <div id="technicalSkills-container">
      Technical Skills
      <br/>
      <button onClick={this.toggleEdit}>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </button>
      <br/>
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
  }
}

TechnicalSkills.propTypes = {
  addOnBlur: PropTypes.bool,
  techskills: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}

export default TechnicalSkills
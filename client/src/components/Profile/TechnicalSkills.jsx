import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'
import axios from 'axios';


class TechnicalSkills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editMode: true,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillMount() {
    console.log('CWM in tech skills', this.props)
  }

  componentWillReceiveProps(nextProps) {

    console.log('nextProps= ', nextProps);
    this.setState({
    }, () => {
      console.log('this.props.tech in did update=', this.props.tech);
    })
  }

  componentDidMount() {
    console.log('when do i get hit')
  }

   componentDidUpdate() {

   }

  toggleSave(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    })
    console.log('SAVING!', this.props);
    axios({
      url: 'http://localhost:3000/updatetech',
      method: 'post',
      data: {tech: JSON.stringify(this.props.tech)}
    }).then(res => {
      console.log('GOT THIS FROM DB POST=', res);
    }).catch(err => {
      console.log('Sorry, error=', err);
    })

  }


  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode,
    });
    console.log('EDITMODE');

  }

  onBeforeRequestAdd (chip) {
    return chip.length >= 3
  }

  handleRequestAdd (chip) {
    this.props.addtechskill(chip)
  }

  handleRequestDelete (deletedChip) {
    this.props.deletetechskill(deletedChip);
  }

  render () {
    console.log('TECHSKILLS this.props= ', this.props.tech)
    return (

      <div id="technicalSkills-container">
      Technical Skills
      <br/>
      {
          this.state.editMode ?
          <button onClick={this.toggleEdit.bind(this)}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          :
          <button onClick={this.toggleSave.bind(this)}>
          <i className="fa fa-floppy-o" aria-hidden="true"></i>
          </button>

        }
      <br/>
      <div id="newdivider"></div>
    <ChipInput
      value={this.props.tech}
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
      disabled={this.state.editMode}
    />
    </div>
    )
  }
}

TechnicalSkills.propTypes = {
  addOnBlur: PropTypes.bool,
  tech: PropTypes.oneOfType([
    PropTypes.array,
  ]),
}

export default TechnicalSkills
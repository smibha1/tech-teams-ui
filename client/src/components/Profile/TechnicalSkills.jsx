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

  componentWillMount() {
    console.log('CWM in tech skills', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps= ', nextProps);
  }

  componentDidMount() {
    console.log('when do i get hit')
  }

  comp

  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    });
    // if( this.state.editMode){
      console.log('{this.props.tech}', this.props)
      // axios({
      //   url: 'http://localhost:3000/',// i don't know what to put here
      //   method: 'post',
      //   data: JSON.stringify(''),
      // }).then(data => {
      //   console.log('IN AXIOS, data=', data);
      //   context.setState({
      
      //   })
      // }).catch(err => {
      //   console.log('axios error=', err);
      // })
    // }
    //This is where the post request gets added 
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
    console.log('TECHSKILLS this.props= ', this.props)
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
      disabled ={this.state.editMode}
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
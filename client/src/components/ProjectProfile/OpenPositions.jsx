import React from 'react';

class OpenPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <div id="openPosition-container">
        <i class="fa fa-question-circle fa-5x" alt={this.props.element.position} aria-hidden="true"></i>
        <span id="openPositonText" > {this.props.element.position} </span>
        <button onClick={this.toggleEditMode}> 
        <i class="fa fa-pencil" aria-hidden="true"></i>
         </button>
      </div>
    );
  }
}

export default OpenPositions;

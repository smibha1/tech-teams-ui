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
      <div>
        <img src="http://bit.ly/2ktZP0O" alt={this.props.element.position} height="75px" />
        {this.props.element.position}
        <button onClick={this.toggleEditMode}> Edit </button>
      </div>
    );
  }
}

export default OpenPositions;

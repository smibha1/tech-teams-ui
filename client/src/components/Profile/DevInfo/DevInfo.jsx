import React from 'react';
import Display from './DevInfoDisplay';
import EditMode from './DevInfoEdit';

class DevInfo extends React.Component {
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
        <h2> Profile Page </h2>
        <button onClick={this.toggleEditMode}> Edit </button>
        {this.state.editMode ? <EditMode info={this.props} /> : <Display info={this.props} />}
      </div>
    );
  }
}

export default DevInfo;

import React from 'react';
import Display from './DevInfoDisplay';
import EditMode from './DevInfoEdit';
import '../Profile.css';

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
    console.log('this is the probs in devinfp', this.props)
    return (
      <div id="profileUsername-container"  >
        <button onClick={this.toggleEditMode}> 
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        {this.state.editMode ? <EditMode info={this.props} /> : <Display info={this.props} />}
      </div>
    );
  }
}

export default DevInfo;

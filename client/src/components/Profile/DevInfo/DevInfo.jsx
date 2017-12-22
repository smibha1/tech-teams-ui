import React from 'react';
import Display from './DevInfoDisplay';
import EditMode from './DevInfoEdit';
import '../Profile.css';

class DevInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      devName: null,
      devPicture: null,
      devPosition: null,
      devLocation: null,
      devDesc: null,
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('DEV INFO CWRP: ', nextProps);
    const { devName, devPicture, devPosition, devLocation, devDesc } = nextProps;
    this.setState({
      devName,
      devPicture,
      devPosition,
      devLocation,
      devDesc,
    })
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <div id="profileUsername-container"  >
        {this.state.editMode ? <EditMode info={this.state} update={this.props.updateDevInfo}/> : <Display info={this.state} />}
        <button onClick={this.toggleEditMode}> 
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <div id="divider"></div>
        
      </div>
    );
  }
}

export default DevInfo;

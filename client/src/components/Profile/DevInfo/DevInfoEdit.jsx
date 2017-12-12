import React from 'react';

class DevInfoEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      devName: this.props.info.devName,
      devPicture: this.props.info.devPicture,
      devPosition: this.props.info.devPosition,
      devLocation: this.props.info.devLocation,
      devDesc: this.props.info.devDesc,
    };

    this.updateName = this.updateName.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.updateDevInfo = this.updateDevInfo.bind(this);
  }

  updateName(event) {
    this.setState({ devName: event.target.value });
  }

  updatePosition(event) {
    this.setState({ devPosition: event.target.value });
  }

  updateLocation(event) {
    this.setState({ devLocation: event.target.value });
  }

  updateDesc(event) {
    this.setState({ devDesc: event.target.value });
  }

  updateDevInfo() {
    this.props.info.updateDevInfo(this.state);
  }

  render() {
    return (
      <div>
        <img src={this.state.devPicture} alt={this.state.devName} height="200" /> <br />

        <input
          placeholder="Name"
          value={this.state.devName}
          onChange={this.updateName}
        /> <br />
        <input
          placeholder="Position"
          value={this.state.devPosition}
          onChange={this.updatePosition}
        /> <br />
        <input
          placeholder="Location"
          value={this.state.devLocation}
          onChange={this.updateLocation}
        /> <br />
        <input
          placeholder="Description"
          value={this.state.devDesc}
          onChange={this.updateDesc}
        /> <br />
        <button onClick={this.updateDevInfo}> Update </button>
      </div>
    );
  }
}

export default DevInfoEdit;

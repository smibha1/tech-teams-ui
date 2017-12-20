import React from 'react';
import { RIEInput, RIETextArea } from 'riek';
import _ from 'lodash';

class ProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blurbEditOff: true,
      editModeOff: true,
      locationEditOff: true,
      projectBlurb: this.props.projectBlurb,
      location: this.props.projectLocation,
      description: this.props.projectDescription,
    };

    // KEEPING TRACK OF POTENTIAL PROP NAMES HERE
    // projectName
    // projectImage
    // projectBlurb
    // projectLocation

    this.updateBlurb = this.updateBlurb.bind(this);
    this.toggleBlurbEdit = this.toggleBlurbEdit.bind(this);
    this.toggleAllOtherEdit = this.toggleAllOtherEdit.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  updateBlurb(event) {
    this.setState({ projectBlurb: event.blurb }, () => console.log('BLURB STATE: ', this.state.projectBlurb));
  }

  toggleBlurbEdit() {
    this.setState({ blurbEditOff: !this.state.blurbEditOff });
  }

  toggleAllOtherEdit() {
    this.setState({ editModeOff: !this.state.editModeOff });
  }

  updateLocation(event) {
    this.setState({ location: event.location }, () => console.log('LOCATION STATE: ', this.state.location));
  }

  updateDescription(event) {
    this.setState({ description: event.description }, () => console.log('DESCRIPTION STATE: ', this.state.description));
  }

  render() {
    return (
      <div>
        <img src={this.props.projectImage} alt={this.props.projectName} height="100" />
        <h1> {this.props.projectName} </h1>
        <RIEInput
          value={this.state.projectBlurb}
          change={this.updateBlurb}
          propName="blurb"
          isDisabled={this.state.blurbEditOff}
        />
        <button onClick={this.toggleBlurbEdit}> Edit </button>
        <br />
        <button onClick={this.toggleAllOtherEdit}> Edit </button> <br />
        Headquarters:
        <RIEInput
          value={this.state.location}
          change={this.updateLocation}
          propName="location"
          isDisabled={this.state.editModeOff}
        /> <br />
        Description:
        <RIETextArea
          value={this.state.description}
          change={this.updateDescription}
          propName="description"
          isDisabled={this.state.editModeOff}
        />

      </div>
    );
  }
}

export default ProjectInfo;

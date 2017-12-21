import React from 'react';

class EditLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: this.props.links.linkedin,
      slack: this.props.links.slack,
      github: this.props.links.github,
      trello: this.props.links.trello,
    };
    
    this.updateLinkedIn = this.updateLinkedIn.bind(this);
    this.updateSlack = this.updateSlack.bind(this);
    this.updateGitHub = this.updateGitHub.bind(this);
    this.updateTrello = this.updateTrello.bind(this);
    this.updateLinks = this.updateLinks.bind(this);
  }

  updateLinkedIn(event) {
    this.setState({ linkedin: event.target.value });
  }

  updateSlack(event) {
    this.setState({ slack: event.target.value });
  }

  updateGitHub(event) {
    this.setState({ github: event.target.value });
  }

  updateTrello(event) {
    this.setState({ trello: event.target.value });
  }

  updateLinks() {
    this.props.updateLinks(this.state);
    this.props.changeParent();
  }

  render() {
    return (
      <div>
        <span> LinkedIn: </span>
        <span>
          <input
            placeholder=""
            value={this.state.linkedin}
            onChange={this.updateLinkedIn}
          />
        </span> <br />

        <span> Slack: </span>
        <span>
          <input
            placeholder=""
            value={this.state.slack}
            onChange={this.updateSlack}
          />
        </span> <br />

        <span> GitHub: </span>
        <span>
          <input
            placeholder=""
            value={this.state.github}
            onChange={this.updateGitHub}
          />
        </span> <br />

        <span> Trello: </span>
        <span>
          <input
            placeholder=""
            value={this.state.trello}
            onChange={this.updateTrello}
          />
        </span> <br />
        <button onClick={this.updateLinks}> Save </button>
      </div>
    );
  }
}

export default EditLinks;

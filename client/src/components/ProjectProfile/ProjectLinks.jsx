import React from 'react';

class ProjectLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: this.props.linkedin,
      slack: this.props.slack,
      github: this.props.github,
      trello: this.props.trello,
    };

    this.redirectLinkedIn = this.redirectLinkedIn.bind(this);
    this.redirectSlack = this.redirectSlack.bind(this);
    this.redirectGithub = this.redirectGithub.bind(this);
    this.redirectTrello = this.redirectTrello.bind(this);
  }

  redirectLinkedIn() {
    window.open(this.state.linkedin);
  }

  redirectSlack() {
    window.open(this.state.slack);
  }

  redirectGithub() {
    window.open(this.state.github);
  }

  redirectTrello() {
    window.open(this.state.trello);
  }


  render() {
    return (
      <div>
        <span className="icon"> {this.state.linkedin ?
          <img onClick={this.redirectLinkedIn} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn" height="50" /> :
          null}
        </span>

        <span className="icon"> {this.state.slack ?
          <img onClick={this.redirectSlack} src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="LinkedIn" height="50" /> :
          null}
        </span>

        <span className="icon"> {this.state.github ?
          <img onClick={this.redirectGithub} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="LinkedIn" height="50" /> :
          null}
        </span>

        <span className="icon"> {this.state.trello ?
          <img onClick={this.redirectTrello} src="https://cdn1.iconfinder.com/data/icons/designer-skills/128/trello-128.png" alt="LinkedIn" height="50" /> :
          null}
        </span>
      </div>
    );
  }
}

export default ProjectLinks;

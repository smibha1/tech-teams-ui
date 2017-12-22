import React from 'react';
import axios from 'axios';

class ProjectLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkedin: this.props.links.linkedin,
      slack: this.props.links.slack,
      github: this.props.links.github,
      trello: this.props.links.trello,
      random: 0,
    };

    this.redirectLinkedIn = this.redirectLinkedIn.bind(this);
    this.redirectSlack = this.redirectSlack.bind(this);
    this.redirectGithub = this.redirectGithub.bind(this);
    this.redirectTrello = this.redirectTrello.bind(this);
  }

  componentWillMount() {
    // console.log('CWM in project links this.props= ', this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    // console.log('CWRP in project links this.props= ', nextProps);
    const { linkedin, slack, github, trello } = nextProps.links;
    this.setState({
      linkedin,
      slack,
      github,
      trello,
    })
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
      <div id="projectlink-container">
      <div class="d-flex justify-content-around">
        <span className="icon"> {this.state.linkedin ?
          <img onClick={this.redirectLinkedIn} src="http://www.freeiconspng.com/uploads/linkedin-icon-19.png" alt="LinkedIn" height="50" /> :
          null}
        </span>

        <span className="icon">
          <img onClick={this.redirectSlack} src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="LinkedIn" height="50" />
        </span>

        <span className="icon">
          <img onClick={this.redirectGithub} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="LinkedIn" height="50" />
        </span>

<<<<<<< HEAD
        <span className="icon">
          <img onClick={this.redirectTrello} src="https://cdn1.iconfinder.com/data/icons/designer-skills/128/trello-128.png" alt="LinkedIn" height="50" />
=======
        <span className="icon"> {this.state.trello ?
          <img onClick={this.redirectTrello} src="http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Trello-icon.png" alt="LinkedIn" height="50" /> :
          null}
>>>>>>> [style]
        </span>
        </div>
      </div>
    );
  }
}

export default ProjectLinks;

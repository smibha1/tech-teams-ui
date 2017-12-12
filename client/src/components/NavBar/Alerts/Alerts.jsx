import React from 'react';
import PropTypes from 'prop-types';
import './Alerts.css';
// import ProjectsContainer from '../../containers/Projects/ProjectsContainer';


class Alerts extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAcceptClick() {
    console.log('accept click', this.props);
  }

  handleRejectClick() {
    console.log('reject click', this.props);
  }

  render() {
    return (
      <li id="alerts-container" className="nav-item dropdown">
        <a
          className="nav-link dropdown-menu-right mt-4 mt-lg-0"
          href="www.google.com"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i
            id="big-bell-navbar"
            className="fa fa-bell-o fa-2x mt-2 mx-2"
            aria-hidden="true"
          />
          <p className="navbar-text visible-xs-inline-block">

            <i id="dropdownBell" className="fa fa-bell-o fa-sm" aria-hidden="true" />
        Alerts
          </p>
        </a>

        <div
          id="alerts"
          className="dropdown-menu dropdown-menu-right mr-0 mt-lg-0"
          aria-labelledby="navbarDropdownMenuLink"
        >

          {this.props.alerts.map((element, index) => (
            <div
              id="alert"
              className="dropdown-item pt-2 px-2"
              href="www.google.com"
              key={element.id}
              index={index}
            >
              <img
                id="projLogo"
                src={element.image}
                alt="Project Logo"
              /> &nbsp;
              <button
                id="projName"
                onClick={() => this.handleProjectNameClick()}
                onKeyDown={() => this.handleProjectNameClick()}
              >
                <span>
                  {`${element.projname} ${element.type}`}
                </span>
              </button> &nbsp;
              <button
                id="accept"
                className="fa fa-check"
                aria-hidden="true"
                onClick={() => this.handleAcceptClick()}
              />&nbsp;
              <button
                id="reject"
                className="fa fa-times"
                aria-hidden="true"
                onClick={() => this.handleRejectClick()}
              />
            </div>
          ))}
        </div>
      </li>
    );
  }
}


Alerts.propTypes = {
  alerts: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

export default Alerts;


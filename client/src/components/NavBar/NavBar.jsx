import React from 'react';
import './NavBar.css';
import Projects from '../../containers/Projects/ProjectsContainer';
import CreateProject from '../NavBar/CreateProject/CreateProject';

class NavBar extends React.Component {
  handleAcceptClick() {
    console.log('accept click', this.props);
  }

  handleRejectClick() {
    console.log('reject click', this.props);
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="logo">TechTeams</div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul id="navbarIcons" className="navbar-nav pt-0">
              <form className="form-inline mr-left mt-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  <span className="fa fa-search" aria-hidden="true" />
                </button>
              </form>

              <CreateProject />
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
                  <div id="alert" className="dropdown-item pt-2 px-2" href="www.google.com">
                    <img
                      id="projLogo"
                      src="https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png"
                      alt="Project Logo"
                    /> &nbsp;
                    <button
                      id="projName"
                      onClick={() => this.handleProjectNameClick()}
                      onKeyDown={() => this.handleProjectNameClick()}
                    >
                      Interview for Dev Dates
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
                  <div id="alert" className="dropdown-item pt-2 px-2" href="www.google.com">
                    <img
                      id="projLogo"
                      src="https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png"
                      alt="Project Logo"
                    /> &nbsp;
                    <button
                      id="projName"
                      onClick={() => this.handleProjectNameClick()}
                      onKeyDown={() => this.handleProjectNameClick()}
                    >
                      Join Dev Dates
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
                </div>
              </li>
              <li id="profile-container" className="nav-item dropdown">
                <a
                  className="nav-link dropdown-menu-right mt-4 mt-lg-0"
                  href="www.google.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="inset mt-2 mt-lg-0">
                    <img
                      src="https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg"
                      alt="Profilepic"
                    />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right mt-4 mt-lg-0"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h6 className="dropdown-header">
                    <i className="fa fa-folder-open" aria-hidden="true" />
                    My Projects
                  </h6>

                  <Projects />

                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="www.google.com">
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    Log Out
                  </a>
                </div>
              </li>
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-folder-open" aria-hidden="true" />
                My Projects
              </li>
              <br />
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-sign-out" aria-hidden="true" />
                Log Out
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

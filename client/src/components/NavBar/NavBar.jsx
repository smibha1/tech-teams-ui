import React from 'react';
import './NavBar.css';
import Projects from '../../containers/Projects/ProjectsContainer';
import Alerts from '../../containers/Alerts/AlertsContainer';
import CreateProject from '../NavBar/CreateProject/CreateProject';
import CreatePosition from '../../components/CreatePosition/CreatePosition';
import Search from '../NavBar/Search/Search';
import logo from '../../../dist/images/Logomakr_5f3c6s.png';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  handleLogout() {
    localStorage.setItem('token', null);
    swal({
      title: 'Logged out!', type: 'success', timer: 1000, showConfirmButton: false,
    }).then(() => {
      this.setState({ number: 0 });
    });
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
          <div>
            <img id="imageLogo" width="40" src={logo} />
          </div>
          <div className="logo">techteams</div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul id="navbarIcons" className="navbar-nav pt-0">

              <Search />
              <CreateProject />
              <Alerts />

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
                  <a className="dropdown-item" href="www.google.com" onClick={this.handleLogout.bind(this)}>
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    Log Out
                  </a>
                </div>
              </li>
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-folder-open" aria-hidden="true" />
                <Projects />
              </li>
              <br />
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-sign-out" aria-hidden="true" onClick={this.handleLogout.bind(this)} />
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

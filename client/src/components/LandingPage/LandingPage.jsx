import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <nav id="navbar" className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="hiddentitle" className="navbar-brand" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul id="navbarNavDropdown" className="navbar-nav">
              <li id="login-container" className="nav-link ml-auto" href="www.google.com">
                <button id="login">Login</button>
              </li>
              <li id="signup-container" className="nav-link" href="www.google.com">
                <button id="signup">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
        <h1 id="title" > Tech Teams Landing Page </h1>
      </div>
    );
  }
}

export default LandingPage;

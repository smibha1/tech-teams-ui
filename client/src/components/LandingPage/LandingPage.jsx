import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

class LandingPage extends React.Component {
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
    return (<div>
      <nav id="navbar" className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div id="hiddentitle" className="navbar-brand" />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {
            localStorage.getItem('token') !== 'null' && jwtDecode(localStorage.token).email !== ''
              ? <ul>
                <li className="nav-link" href="www.google.com">
                  <button id="logout" onClick={this.handleLogout.bind(this)}>Logout</button>
                </li>
                </ul>
              : <ul id="navbarNavDropdown" className="navbar-nav">
                <li id="login-container" className="nav-link ml-auto" href="www.google.com">
                  <Link to="/login" href="/login">
                    <button id="login">Login</button>
                  </Link>
                </li>
                <li id="signup-container" className="nav-link" href="www.google.com">
                  <Link to="/signup" href="/signup">
                    <button id="signup">Sign Up</button>
                  </Link>
                </li>
                </ul>
          }
        </div>
      </nav>
      <h1 id="title">
        Tech Teams Landing Page
      </h1>
    </div>);
  }
}

export default LandingPage;

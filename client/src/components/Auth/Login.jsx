import React from 'react';
import './Signup.css';
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';
import './Login.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import jwtDecode from 'jwt-decode';

class Login extends React.Component {

  async handleLoginSubmit(e) {
    e.preventDefault();
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();

    axios({
      url: 'http://localhost:3000/login',
      method: 'post',
      data: {
        email: email,
        password: password
      }
    }).then(resp => {
      if (resp.status === 204) {
        swal({title: 'Error', text: 'Double check email and password', type: 'error', showConfirmButton: false, timer: 1000}).then(() => {
          $('#InputEmail').val('');
          $('#InputPassword').val('');
        })
      } else {
        localStorage.setItem('token', resp.data.accessToken);
        swal({title: 'Signing In', type: 'success', showConfirmButton: false, timer: 1000})
        // Should reroute you!
      }

    }).catch(err => {
      swal({title: 'Error', text: err, type: 'error', showConfirmButton: false, timer: 1000}).then(() => {
        $('#InputEmail').val('');
        $('#InputPassword').val('');
      })
    })

  }

  render() {
    return (<div className="Login">
      <form id="login-form">
        <div className="form-group">
          <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="rudd@aol.com"></input>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
          <button id="loginsubmit" type="submit" className="btn btn-primary" onClick={this.handleLoginSubmit.bind(this)}>Login</button>
        </div>
      </form>
    </div>)
  }
}

export default Login;

import React from 'react';
import './Signup.css';
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';
import './Login.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

class Login extends React.Component {

  handleLoginSubmit() {
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();
    if (localStorage.getItem('user') !== 'null') {
      console.log('User already signed in!');
      swal({title: 'Already Signed In!', text: localStorage.getItem('user'), type: 'info'})
    } else {
      auth.signInWithEmailAndPassword(email, password).then(user => {
        swal({title: 'Signed In', type: 'success', showConfirmButton: false, timer: 1000}).then(() => {
          // Redirect in here
          <LandingPage />
          console.log('after logged in');
        })

        localStorage.setItem('user', user.email);
        // axios with name and email;
      }, error => {
        console.log(error);
        localStorage.setItem('user', null);
        swal({title: "Error", type: 'error', text: error, showConfirmButton: true});
      });
    }
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

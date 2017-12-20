import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert2';
import './Login.css';
import { Link } from 'react-router-dom';
import { Router, Route, Redirect } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import jwtDecode from 'jwt-decode';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleLoginSubmit(e) {
    e.preventDefault();
    const email = $('#InputEmail').val();
    const password = $('#InputPassword').val();
    const self = this;

    axios({
      url: 'http://localhost:3000/login',
      method: 'post',
      data: {
        email,
        password,
      },
    }).then((resp) => {
      if (resp.status === 204) {
        swal({
          title: 'Error', text: 'Double check email and password', type: 'error', showConfirmButton: false, timer: 1000,
        }).then(() => {
          $('#InputEmail').val('');
          $('#InputPassword').val('');
        });
      } else {
        localStorage.setItem('token', resp.data.accessToken);
        axios.defaults.headers.common['Authorization'] = resp.data.accessToken;
        console.log(axios.defaults.headers);
        swal({
          title: 'Signing In', type: 'success', showConfirmButton: false, timer: 1000,
        }).then(() => {
          // set the user and email in store = this.props.user/this.props.email
          this.props.history.push('/username/profile');
        });
      }
    }).catch((err) => {
      swal({
        title: 'Error', text: err, type: 'error', showConfirmButton: false, timer: 1000,
      }).then(() => {
        $('#InputEmail').val('');
        $('#InputPassword').val('');
      });
    });
  }

  render() {
    return (<div className="overlayLogin">

      <form id="login-form">
        <h2 id="loginHeader">
          Login
        </h2>
        <i className="fa fa-envelope fa-lg" aria-hidden="true" />&nbsp;
        <TextField
          id="InputEmail"
          hintText="rudd@aol.com"
          floatingLabelText="Email"
          floatingLabelFocusStyle={{
            color: '#491f68',
          }}
          underlineFocusStyle={{
            borderColor: '#491f68',
          }}
          underlineStyle={{
            borderColor: '#491f68',
          }}
        /><br />
        <i className="fa fa-lock fa-lg" aria-hidden="true" />&nbsp;
        <TextField
          id="InputPassword"
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelFocusStyle={{
            color: '#491f68',
          }}
          underlineFocusStyle={{
            borderColor: '#491f68',
          }}
          underlineStyle={{
            borderColor: '#491f68',
          }}
        /><br />
        <div id="submitButton">
          <button id="loginsubmit" className="btn btn-primary" type="submit" onClick={this.handleLoginSubmit.bind(this)}>Login
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </button>
        </div>
        <Divider />
        <p className="dividerSignUp font-small grey-text d-flex justify-content-end mx-5 pt-1 mb-1">Not a member?
          <Link to="/signup" href="/signup">
            <span href="#" className="dividerSignUp blue-text ml-1">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>);
  }
}

export default Login;

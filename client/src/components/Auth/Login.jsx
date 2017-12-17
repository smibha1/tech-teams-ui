import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert2';
import './Login.css';
import {Link} from 'react-router-dom';
import {Router as Router, Route, Redirect} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import jwtDecode from 'jwt-decode';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

class Login extends React.Component {

  async handleLoginSubmit(e) {
    e.preventDefault();
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();
    let self = this;

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
          .then( () => {
        this.props.history.push('/username/profile');
          }
          )
      }

    }).catch(err => {
      swal({title: 'Error', text: err, type: 'error', showConfirmButton: false, timer: 1000}).then(() => {
        $('#InputEmail').val('');
        $('#InputPassword').val('');
      })
    })

  }

  render() {
    return (

    <div className="Login">
    
       <form id="login-form">
       <h2 id="loginHeader"> Login </h2>
        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>&nbsp;
        <TextField
          id="InputEmail"
          hintText="rudd@aol.com"
          floatingLabelText="Email"
          floatingLabelFocusStyle={{color: '#491f68'}}
          underlineFocusStyle={{borderColor: '#491f68'}}
          underlineStyle={{borderColor: '#491f68'}}
        /><br />
          <i className="fa fa-lock fa-lg" aria-hidden="true"></i>&nbsp;
         <TextField
            id="InputPassword" 
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            floatingLabelFocusStyle={{color: '#491f68'}}
            underlineFocusStyle={{borderColor: '#491f68'}}
            underlineStyle={{borderColor: '#491f68'}}
          /><br />
          <div id="submitButton">
          <button id="loginsubmit" className="btn btn-primary" type="submit" onClick={this.handleLoginSubmit.bind(this)}>Login</button>
          </div>
          <Divider />
          <p className="dividerSignUp font-small grey-text d-flex justify-content-end mx-5 pt-1 mb-1">Not a member? 
            <Link to="/signup" href="/signup">
              <span href="#" className="dividerSignUp blue-text ml-1"> Sign Up</span>
            </Link>
          </p>
       </form>
    </div>

    )
  }
}

export default Login;

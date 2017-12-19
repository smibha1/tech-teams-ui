import React, { PropTypes } from 'react';
import $ from 'jquery';
import firebase, { auth } from '../../../../firebase.config.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import './Signup.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  async handleSignUpSubmit(e) {
    e.preventDefault();
    const name = $('#InputName').val();
    const email = $('#InputEmail').val();
    const password = $('#InputPassword').val();
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      swal({
        title: 'Email is available!',
        type: 'success',
        timer: 1000,
      }).then(() => {
        this.props.updateSingup(name, email);
        this.props.history.push('/signup/questions');
      });
    }, (error) => {
      console.log(error);
      swal({
        title: 'Error', type: 'error', text: error, showConfirmButton: true,
      });
    });
  }

  render() {
    return (<div className="overlaySignUp">
      <form id="signingup">
        <h2 id="signUpHeader">
          Sign Up
        </h2>
        <i className="fa fa-user fa-lg" aria-hidden="true" />&nbsp;
        <TextField
          id="InputName"
          hintText="Paul Rudd"
          floatingLabelText="Name"
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
<<<<<<< HEAD
        <div id="submitButton">
          <button id="signupsubmit" className="btn btn-primary" type="submit" onClick={this.handleSignUpSubmit.bind(this)}>Sign Up
            <i className="fa fa-paper-plane" aria-hidden="true" />
=======
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
          <button id="signupsubmit" className="btn btn-primary" type="submit" onClick={this.handleSignUpSubmit.bind(this)}>Sign Up 
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
>>>>>>> [feat][style]
          </button>
        </div>
        <Divider />
        <p className="dividerSignUp font-small grey-text d-flex justify-content-end mx-5 pt-1 mb-1">Already a member?
          <Link to="/login" href="/login">
            <span href="#" className="dividerSignUp blue-text ml-1">Login</span>
          </Link>
        </p>
      </form>
    </div>);
  }
}

export default Signup;

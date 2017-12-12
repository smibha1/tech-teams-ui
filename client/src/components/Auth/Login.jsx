import React from 'react';
import './Signup.css';
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';

class Login extends React.Component {

  handleSignUpSubmit() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("LOGGING USER", user.email, user.uid);
        // User is signed in.
      } else {
        console.log('no user');
        // No user is signed in.
      }
    });

    let name = $('#InputName').val();
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();
    auth.signInWithEmailAndPassword(email, password).then(result => {

      swal({title: 'Signed Up', type: 'success', timer: 1000})

      // alert(result);

      console.log(result);
      // axios with name and email;
    }, error => {
      console.log(error);
      swal({title: "Error", type: 'error', text: error, showConfirmButton: true});
    });

  }

  render() {
    return (<div className="Login">
      <form id="login-form">
        <div className="form-group">
          <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="rudd@aol.com"></input>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSignUpSubmit.bind(this)}>Login</button>
      </form>
    </div>);
  }
}

export default Login;

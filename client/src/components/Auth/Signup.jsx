import React from 'react';
import './Signup.css';
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';

class Signup extends React.Component {

  handleSignUpSubmit() {
    let name = $('#InputName').val();
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();


      auth.createUserWithEmailAndPassword(email, password)
        // .catch(function(error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // swal({title: errorCode, text: errorMessage, type: 'error', showConfirmButton: false, timer: 1000})
        // console.log('Sign Up Error!', errorCode, errorMessage);
      .then( result => {
        console.log(result);
        // alert(result);
        swal({
          title: 'Signed Up',
          type: 'success',
          timer: 1000
        })
        // axios with name and email;
      }, error => {
        console.log(error);
        swal({
          title: "Error",
          type: 'error',
          text: error,
          showConfirmButton: true,
        });
      });



    //   => {
    //   //   if()
    //   //   // swal({title: 'Signed Up',text: result, type: 'success', showConfirmButton: false, timer: 1000})
    //   // });
    // } else {
    //   // swal({title: 'Incomplete', text:'Please check all fields', type: 'error', showConfirmButton: false, timer: 1000})
    //   console.log("Incorrect form", name, email, password);
    // }

  }

  render() {
    return (<div className="SignUp">
      <form id="signingup">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Paul Rudd"></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="rudd@aol.com"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSignUpSubmit.bind(this)}>Login</button>
      </form>
    </div>);
  }
}

export default Signup;

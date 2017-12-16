import React from 'react';
import './Signup.css';
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      // path: '/signup'
    }
  }

  async handleSignUpSubmit(e) {
    e.preventDefault();
    let name = $('#InputName').val();
    let email = $('#InputEmail').val();
    let password = $('#InputPassword').val();
    auth.createUserWithEmailAndPassword(email, password).then(user => {
      swal({title: 'Signed Up', type: 'success', timer: 1000}).then(() => {
        this.props.history.push('/questions')
      })
    }, error => {
      console.log(error);
      swal({title: "Error", type: 'error', text: error, showConfirmButton: true});
    });
  }

  render() {
    return (<div className="SignUp">
      <form id="signingup">
        <div className="form-group">
          <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Paul Rudd"></input>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="rudd@aol.com"></input>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="InputPassword" placeholder="Password"></input>
        </div>
        <button id="signupsubmit" type="submit" className="btn btn-primary" onClick={this.handleSignUpSubmit.bind(this)}>Sign Up</button>
      </form>
    </div>);
  }
}

export default Signup;

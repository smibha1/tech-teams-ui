import React, { PropTypes } from 'react'
import $ from 'jquery';
import firebase, {auth} from '../../../../firebase.config.js';
import axios from 'axios';
import swal from 'sweetalert2';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Signup.css';

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
    return (
                  
    <div className="SignUp">
       <form id="signingup">
       <h2 id="signUpHeader"> Sign Up </h2>
        <i className="fa fa-user fa-lg" aria-hidden="true" ></i>&nbsp;
         <TextField
          id="InputName"
          hintText="Paul Rudd"
          floatingLabelText="Name"
          floatingTextStyle={{color: '#491f68'}}
          floatingLabelFocusStyle={{color: '#491f68'}}
          underlineFocusStyle={{borderColor: '#491f68'}}
          underlineStyle={{borderColor: '#491f68'}}
        /><br />
        <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>&nbsp;
        <TextField
          id="InputEmail"
          hintText="rudd@aol.com"
          floatingLabelText="Email"
          floatingTextStyle={{color: '#491f68'}}
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
            floatingTextStyle={{color: '#491f68'}}
            floatingLabelFocusStyle={{color: '#491f68'}}
            underlineFocusStyle={{borderColor: '#491f68'}}
            underlineStyle={{borderColor: '#491f68'}}
          /><br />
          <div id="submitButton">
          <button id="signupsubmit" className="btn btn-primary" type="submit" onClick={this.handleSignUpSubmit.bind(this)}>Login</button>
          </div>
       </form>
     </div>
    )
  }
}

export default Signup;

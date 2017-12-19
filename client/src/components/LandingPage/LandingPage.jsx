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

      <section className="bg-texture hero" id="main">
          <div className="container">
              <div className="row d-md-flex brand">
                  <div className="col-md-6 hidden-sm-down wow fadeIn">
                      <img className="img-fluid mx-auto d-block" src={require('./logo.png')}/>
                  </div>
                  <div className="col-md-6 col-sm-12 text-white wow fadeIn">
                      <h2 className="pt-4">Join a <b className="text-primary-light">team </b> With TechTeams</h2>
                      <p className="mt-5">
                          Where devs meet dev teams.
                      </p>
                      <p className="mt-5">
                          <Link to="/login" href="/login"><button className="login btn btn-white mb-2 page-scroll">Login</button></Link>
                          <Link to="/signup" href="/signup"><button className="btn btn-white mb-2 page-scroll">Sign Up</button></Link>
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-faded" id="features">
          <div className="container">
              <div className="row mb-3">
                  <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 text-center wow fadeIn">
                      <h2 className="text-primary">Here's What We Can Do For You</h2>
                      <p className="lead mt-4">
                          Comply with plenty of awesome features to <br/>wow the viewers.
                      </p>
                  </div>
              </div>
              <div className="row mt-5 text-center">
                  <div className="col-md-4 wow fadeIn">
                      <div className="card">
                          <div className="card-block">
                              <div className="icon-box">
                                  <em className="ion-aperture icon-md"></em>
                              </div>
                              <h6>Insane Collaboration</h6>
                              <p>

                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 wow fadeIn">
                      <div className="card">
                          <div className="card-block">
                              <div className="icon-box">
                                  <em className="ion-android-wifi icon-md"></em>
                              </div>
                              <h6>HOLY FUCCC</h6>
                              <p>
                              bazinga
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 wow fadeIn">
                      <div className="card">
                          <div className="card-block">
                              <div className="icon-box">
                                  <em className="ion-ios-settings icon-md"></em>
                              </div>
                              <h6>GOT DAM O SHITTTT</h6>
                              <p>
                              holla holla get dolla
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-alt" id="team">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 text-center">
                      <h2 className="text-primary">DBJS</h2>
                      <p className="lead pt-3">
                          Meet the tech team behind TechTeams
                      </p>
                  </div>
              </div>
              <div className="row d-md-flex mt-5 text-center">
                  <div className="team col-sm-3 mt-2 wow fadeInLeft">
                      <img src={require('./kai.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>David Lee</h5>
                      <p>Front-end Engineer</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeIn">
                      <img src={require('./brendan.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>Brendan Viloria</h5>
                      <p>Back-end Engineer</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeIn">
                      <img src={require('./jake.png')} className="img-team img-fluid rounded-circle"/>
                      <h5>Jacob Perez</h5>
                      <p>Product Owner</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeInRight">
                      <img src={require('./smita.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>Smita Bhakta</h5>
                      <p>Scrum Master</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-texture-collage p-0" id="contact">
          <div className="container">
              <div className="row d-md-flex text-white text-center wow fadeIn">
                  <div className="col-sm-4 p-5">
                      <p><em className="ion-ios-telephone-outline icon-md"></em></p>
                      <p className="lead">13104201337</p>
                  </div>
                  <div className="col-sm-4 p-5">
                      <p><em className="ion-ios-email-outline icon-md"></em></p>
                      <p className="lead">info@techteams.com</p>
                  </div>
                  <div className="col-sm-4 p-5">
                      <p><em className="ion-ios-location-outline icon-md"></em></p>
                      <p className="lead">Los Angeles, CA</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-footer" id="connect">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 text-center wow fadeIn">
                      <h1>TechTeams</h1>
                      <p className="mt-4">
                          <a href="https://twitter.com/" target="_blank"><em className="ion-social-twitter text-twitter-alt icon-sm mr-3"></em></a>
                          <a href="https://facebook.com/" target="_blank"><em className="ion-social-github text-facebook-alt icon-sm mr-3"></em></a>
                          <a href="https://www.linkedin.com/" target="_blank"><em className="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                          <a href="https://plus.google.com/" target="_blank"><em className="ion-social-googleplus text-google-alt icon-sm mr-3"></em></a>
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>);
  }
}

export default LandingPage;

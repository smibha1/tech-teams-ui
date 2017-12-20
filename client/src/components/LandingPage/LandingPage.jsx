import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import logo from './logo.png';

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
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top sticky-navigation">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ion-grid icon-sm"></span>
            </button>
            <a className="navbar-brand hero-heading" href="#">TechTeams</a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#main">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#team">Team</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

      <section className="bg-texture hero" id="main">
          <div className="container">
              <div className="row d-md-flex brand">
                  <div className="col-md-6 hidden-sm-down wow fadeIn">
                      <img className="img-fluid mx-auto d-block" src={logo}/>
                  </div>
                  <div className="col-md-6 col-sm-12 text-white wow fadeIn">
                      <h2 className="pt-4">Join a <b className="text-primary-light">Team </b> With TechTeams</h2>
                      <p className="mt-5">
                        Help us help you make the world a better place.
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
                    <h2 className="text-primary">Here's What We Can Offer</h2>
                  </div>
              </div>
              <div className="row mt-5 text-center">
                  <div className="col-md-4 wow fadeIn">
                      <div className="card">
                          <div className="card-block">
                              <div className="icon-box">
                                  <em className="ion-aperture icon-md"></em>
                              </div>
                              <h6>Integration</h6>
                              <p>
                              We've got 7 words for you. We love TechTeams' integrated multi platform functionality!
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
                              <h6>Extensibility</h6>
                              <p>
                              We're making the world a better place through constructing elegant hierarchies for maximum code reuse and extensibility.
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
                              <h6>SoMoLo</h6>
                              <p>
                              We're Social<br/>Mobile<br/>Local.<br/>
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
                          Meet the team behind TechTeams
                      </p>
                  </div>
              </div>
              <div className="row d-md-flex mt-5 text-center">
                  <div className="team col-sm-3 mt-2 wow fadeInLeft">
                      <img src={require('./kai.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>David Lee</h5>
                      <p className="text-primary">David</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeIn">
                      <img src={require('./brendan.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>Brendan Viloria</h5>
                      <p className="text-primary">Chief Technology Officer</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeIn">
                      <img src={require('./jake.png')} className="img-team img-fluid rounded-circle"/>
                      <h5>Jacob Perez</h5>
                      <p className="text-primary">Chief Executive Officer</p>
                  </div>
                  <div className="team col-sm-3 mt-2 wow fadeInRight">
                      <img src={require('./smita.jpeg')} className="img-team img-fluid rounded-circle"/>
                      <h5>Smita Bhakta</h5>
                      <p className="text-primary">Chief Operating Officer</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-texture-collage p-0" id="contact">
          <div className="container">
              <div className="row d-md-flex text-white text-center wow fadeIn">
                  <div className="col-sm-4 p-5">
                      <p><em className="ion-ios-telephone-outline icon-md"></em></p>
                      <p className="lead">+1 310 666 1738</p>
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
                          <a href="https://github.com/dbjs" target="_blank"><em className="ion-social-github text-github-alt icon-sm mr-3"></em></a>
                          <a href="https://www.linkedin.com/" target="_blank"><em className="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>);
  }
}

export default LandingPage;

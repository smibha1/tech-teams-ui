import React from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';
import TechnicalSkillsContainer from '../../containers/Profile/TechnicalSkillsContainer';

class Questions extends React.Component {
  handleTitle1Change(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div >
        <h1>Getting Started</h1>
        <div className="container">
          <form className="form-horizontal" method="post" onSubmit={this.handleTitle1Change}>
            <div className="row">
              <div className="form-group row col-lg-6">
                <div className="col-21">
                  <label className="custom-control custom-radio">
                    <input
                      id="radioDev"
                      name="cat"
                      type="radio"
                      className="custom-control-input"
                      value="0"

                    />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Developer</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <input
                      id="radioSM"
                      name="cat"
                      type="radio"
                      className="custom-control-input"
                      value="1"
                    />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Scrum Master</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <input
                      id="radioPM"
                      name="cat"
                      type="radio"
                      className="custom-control-input"
                      value="2"
                    />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Product Owner</span>
                  </label>
                  <div className="form-group row">
                    <label
                      htmlFor="example-text-input"
                      className="col-2 col-form-label"
                    >
                      Other
                    </label>
                    <div className="col-5">
                      <input
                        className="form-control"
                        type="text"
                        value="UI/UX"
                        id="example-text-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Location: </label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  value="Los Angeles, CA"
                  id="example-text-input"
                />
              </div>
            </div>
            <TechnicalSkillsContainer />
            <div className="form-group row">
              <label className="col-2 col-form-label">About Me: </label>
              <div className="col-10">
                <input
                  className="form-control"
                  type="text"
                  value="I am looking for a full time position in react."
                  id="example-text-input"
                />
              </div>
            </div>
            <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" />
              <span className="custom-control-indicator" />
              <span className="custom-control-description">Check this custom checkbox</span>
            </label>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <Link to="/username/profile" href="/username/profile">
                  <button type="submit" className="btn btn-primary">Create Profile</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Questions;


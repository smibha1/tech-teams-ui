import React from 'react';
import swal from 'sweetalert2';
import $ from 'jquery';
import './NavBar.css';


class NavBar extends React.Component {
  handleAcceptClick() {
    console.log('accept click', this.props);
  }

  handleRejectClick() {
    console.log('reject click', this.props);
  }

  handleProjectNameClick() {
    console.log('click on project name', this.props);
  }

  handleCreateProjectClick() {
    console.log('click on createProject', this.props);
    swal.setDefaults({
      showCancelButton: true,
      confirmButtonText: 'Next &rarr;',
      progressSteps: ['1', '2', '3', '4'],
    });

    const steps = [
      {
        title: 'Basic Info',
        text: 'ProjectName',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
          + 'Project Name: &nbsp;'
          + '<input id:"projName" type="text" name="firstname" placeholder="DevDates"><br>'
          + '<br>'
          + 'Headquarters: &nbsp;'
          + '<input id:"headquarters" type="text" name="lastname" placeholder="Los Angeles, CA"><br>'
          + '<br>'
          + 'Company Logo: &nbsp;'
          + '<input id:"logo" type="url" name="lastname" placeholder="http://i.telegraph.co.uk/logo.jpg"><br>'
          + '<br>'
          + 'Project Description: &nbsp;'
          + '<input id:"projDesc" type="text" name="lastname" placeholder="Bringing Devs together"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          $('#projName').val(),
          $('#logo').val(),
          $('#headquarters').val(),
          $('#projDesc').val(),
        ],
      },
      {
        title: 'Project Links',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
        + 'Your Project Website: &nbsp;'
        + '<input id:"companyWebsite" type="url" name="firstname" placeholder="www.devdates.com"><br>'
        + '<br>'
        + '<i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;'
        + '<input id:"linkedin" type="url" name="lastname" placeholder="https://linkedin.com/tonystark"><br>'
        + '<br>'
        + '<i class="fa fa-slack" aria-hidden="true"></i> &nbsp;'
        + '<input id:"slack" type="url" name="lastname" placeholder="https://hrla-students.slack.com/messages"><br>'
        + '<br>'
        + '<i class="fa fa-github" aria-hidden="true"></i> &nbsp;'
        + '<input id:"github" type="url" name="lastname" placeholder="https://github.com/tonystark"><br>'
        + '<br>'
        + '<i class="fa fa-trello" aria-hidden="true"></i> &nbsp;'
        + '<input id:"trello" type="url" name="lastname" placeholder="https://trello.com/b/0NYefHQ3/devdates"><br>'
        + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          $('#companyWebsite').val(),
          $('#linkedin').val(),
          $('#slack').val(),
          $('#github').val(),
          $('#trello').val(),
        ],
      },
      {
        title: 'Tech Stack',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
          + '<input id:"techStack" class="submissionfield" type="text" name="firstname" placeholder="React, Node, MongoDB"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          $('#techStack').val(),
        ],
      },
      {
        title: 'Add Team Members',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
          + 'Name: &nbsp;'
          + '<input id:"name1" type="text" name="firstname" placeholder="Tony Stark"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id:"position1" type="text" name="firstname" placeholder="Product Owner"><br>'
          + '<br>'
          + 'Name: &nbsp;'
          + '<input id:"name2" type="text" name="firstname" placeholder="Tony Stark"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id:"position2" type="text" name="firstname" placeholder="Developer"><br>'
          + '<br>'
          + 'Name: &nbsp;'
          + '<input id:"name3" type="text" name="firstname" placeholder="Pepper Potts"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id:"position3" type="text" name="firstname" placeholder="Scrum Master"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          $('#name1').val(),
          $('#name2').val(),
          $('#name3').val(),
          $('#position1').val(),
          $('#position2').val(),
          $('#position3').val(),
        ],
      },
    ];

    swal.queue(steps).then((result) => {
      swal.resetDefaults();
      console.log('result', result);
      if (result.value) {
        swal({
          title: 'All done!',
          type: 'success',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="logo">TechTeams</div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul id="navbarIcons" className="navbar-nav pt-0">
              <form className="form-inline mr-left mt-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  <span className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
              <li
                id="createProj-container"
                className="nav-link toggle ml-auto"
                href="www.google.com"
              >
                <i
                  id="big-bell-navbar"
                  className="fa fa-plus fa-2x pt-2 mt-lg-0"
                  aria-hidden="true"
                  onClick={() => this.handleCreateProjectClick()}
                />
              </li>
              <li className="navbar-text visible-xs-inline-block">
                <i
                  id="dropdownPlus"
                  className="fa fa-plus pt-2 mt-lg-0"
                  aria-hidden="true"
                  onClick={() => this.handleCreateProjectClick()}
                />
                Create Project
              </li>
              <li id="alerts-container" className="nav-item dropdown">
                <a
                  className="nav-link dropdown-menu-right mt-4 mt-lg-0"
                  href="www.google.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i id="big-bell-navbar" className="fa fa-bell-o fa-2x mt-2 mx-2" aria-hidden="true" />
                  <p className="navbar-text visible-xs-inline-block">

                    <i id="dropdownBell" className="fa fa-bell-o fa-sm" aria-hidden="true" />
                  Alerts
                  </p>
                </a>

                <div
                  id="alerts"
                  className="dropdown-menu dropdown-menu-right mr-0 mt-lg-0"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div id="alert" className="dropdown-item pt-2 px-2" href="www.google.com">
                    <img
                      id="projLogo"
                      src="https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png"
                      alt="Project Logo"
                    /> &nbsp;
                    <button
                      id="projName"
                      onClick={() => this.handleProjectNameClick()}
                      onKeyDown={() => this.handleProjectNameClick()}
                    >
                      Interview for Dev Dates
                    </button> &nbsp;
                    <button
                      id="accept"
                      className="fa fa-check"
                      aria-hidden="true"
                      onClick={() => this.handleAcceptClick()}
                    />&nbsp;
                    <button
                      id="reject"
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => this.handleRejectClick()}
                    />
                  </div>
                  <div id="alert" className="dropdown-item pt-2 px-2" href="www.google.com">
                    <img
                      id="projLogo"
                      src="https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png"
                      alt="Project Logo"
                    /> &nbsp;
                    <button
                      id="projName"
                      onClick={() => this.handleProjectNameClick()}
                      onKeyDown={() => this.handleProjectNameClick()}
                    >
                      Join Dev Dates
                    </button> &nbsp;
                    <button
                      id="accept"
                      className="fa fa-check"
                      aria-hidden="true"
                      onClick={() => this.handleAcceptClick()}
                    />&nbsp;
                    <button
                      id="reject"
                      className="fa fa-times"
                      aria-hidden="true"
                      onClick={() => this.handleRejectClick()}
                    />
                  </div>
                </div>
              </li>
              <li id="profile-container" className="nav-item dropdown">
                <a
                  className="nav-link dropdown-menu-right mt-4 mt-lg-0"
                  href="www.google.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="inset mt-2 mt-lg-0">
                    <img
                      src="https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg"
                      alt="Profilepic"
                    />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right mt-4 mt-lg-0"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h6 className="dropdown-header">
                    <i className="fa fa-folder-open" aria-hidden="true" />
                    My Projects
                  </h6>
                  <a className="dropdown-item" href="www.google.com">
                    <img
                      id="projLogo-dropdown"
                      src="https://logos.textgiraffe.com/logos/logo-name/Dev-designstyle-love-heart-m.png"
                      alt="Project Logo"
                    /> &nbsp;
                    Dev Dates
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="www.google.com">
                    <i className="fa fa-sign-out" aria-hidden="true" />
                    Log Out
                  </a>
                </div>
              </li>
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-folder-open" aria-hidden="true" />
                My Projects
              </li>
              <br />
              <li className="navbar-text visible-xs-inline-block">
                <i className="fa fa-sign-out" aria-hidden="true" />
                Log Out
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

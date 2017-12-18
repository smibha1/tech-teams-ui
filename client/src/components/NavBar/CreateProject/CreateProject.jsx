import React from 'react';
import swal from 'sweetalert2';
import $ from 'jquery';
import './CreateProject.css';


class CreateProject extends React.Component {
  handleCreateProjectClick() {
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
          + '<input id="projName" class="swal2-input" type="text" name="firstname" placeholder="DevDates"><br>'
          + '<br>'
          + 'Headquarters: &nbsp;'
          + '<input id="headquarters" class="swal2-input" type="text" name="lastname" placeholder="Los Angeles, CA"><br>'
          + '<br>'
          + 'Company Logo: &nbsp;'
          + '<input id="logo" class="swal2-input" type="url" name="lastname" placeholder="http://i.telegraph.co.uk/logo.jpg"><br>'
          + '<br>'
          + 'Project Description: &nbsp;'
          + '<input id="projDesc" class="swal2-input" type="text" name="lastname" placeholder="Bringing Devs together"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [{
          ProjName: $('#projName').val(),
          ProjLogo: $('#logo').val(),
          HeadQuarters: $('#headquarters').val(),
          ProjDesc: $('#projDesc').val(),
        }
        ],
      },
      {
        title: 'Project Links',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
        + 'Your Project Website: &nbsp;'
        + '<input id="companyWebsite" type="url" name="firstname" placeholder="www.devdates.com"><br>'
        + '<br>'
        + '<i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;'
        + '<input id="linkedin" type="url" name="lastname" placeholder="https://linkedin.com/tonystark"><br>'
        + '<br>'
        + '<i class="fa fa-slack" aria-hidden="true"></i> &nbsp;'
        + '<input id="slack" type="url" name="lastname" placeholder="https://hrla-students.slack.com/messages"><br>'
        + '<br>'
        + '<i class="fa fa-github" aria-hidden="true"></i> &nbsp;'
        + '<input id="github" type="url" name="lastname" placeholder="https://github.com/tonystark"><br>'
        + '<br>'
        + '<i class="fa fa-trello" aria-hidden="true"></i> &nbsp;'
        + '<input id="trello" type="url" name="lastname" placeholder="https://trello.com/b/0NYefHQ3/devdates"><br>'
        + '</form>',
        focusConfirm: false,
        preConfirm: () => ({
          companyWebsite: $('#companyWebsite').val(),
          linkedin: $('#linkedin').val(),
          slack: $('#slack').val(),
          github: $('#github').val(),
          trello: $('#trello').val(),
        }),
      },
      {
        title: 'Tech Stack',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
          + '<input id="techStack" class="submissionfield" type="text" name="firstname" placeholder="React, Node, MongoDB"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => ({
          techStack: $('#techStack').val(),
        }),
      },
      {
        title: 'Add Team Members',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form action="/action_page.php">'
          + 'Name: &nbsp;'
          + '<input id="name1" type="text" name="firstname" placeholder="Tony Stark"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id="position1" type="text" name="firstname" placeholder="Product Owner"><br>'
          + '<br>'
          + 'Name: &nbsp;'
          + '<input id="name2" type="text" name="firstname" placeholder="Tony Stark"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id="position2" type="text" name="firstname" placeholder="Developer"><br>'
          + '<br>'
          + 'Name: &nbsp;'
          + '<input id="name3" type="text" name="firstname" placeholder="Pepper Potts"> &nbsp;'
          + 'Position: &nbsp;'
          + '<input id="position3" type="text" name="firstname" placeholder="Scrum Master"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          {
            name: $('#name1').val(),
            title: $('#position1').val(),
          },
          {
            name: $('#name2').val(),
            title: $('#position2').val(),
          },
          {
            name: $('#name3').val(),
            title: $('#position3').val(),
          },
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
      <ul id="createProjectsNav">
        <li
          id="createProj-container"
          className="nav-link toggle ml-auto"
          href="www.google.com"
        >
          <i
            id="big-bell-navbar"
            className="fa fa-plus fa-2x pt-2 mt-lr-0"
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
      </ul>
    );
  }
}

export default CreateProject;

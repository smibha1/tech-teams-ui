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
        html: '<form class="createProjectForm" action="/action_page.php">'
          + '<label class="label" >Project Name </label>  &nbsp;'
          + '<input id="projectName" class="swal2-input" type="text" placeholder="DevDates"><br>'
          + '<br>'
          + '<label class="label">Headquarters</label>  &nbsp;'
          + '<input id="headquarters" class="swal2-input" type="text" placeholder="Los Angeles, CA"><br>'
          + '<br>'
          + '<label class="label">Company Logo </label> &nbsp;'
          + '<input id="logo" class="swal2-input" type="url"  placeholder="http://i.telegraph.co.uk/logo.jpg"><br>'
          + '<br>'
          + '<label class="label">Project Description</label>  &nbsp;'
          + '<input id="projDesc" class="swal2-input" type="text" placeholder="Bringing Devs together"><br>'
          + '</form>',
        focusConfirm: false,
        preConfirm: () => [{
          projName: $('#projectName').val(),
          ProjLogo: $('#logo').val(),
          HeadQuarters: $('#headquarters').val(),
          ProjDesc: $('#projDesc').val(),
        },
        ],
      },
      {
        title: 'Project Links',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form class="createProjectForm"  action="/action_page.php">'
        + '<label class="label"> Your Website </label> &nbsp;'
        + '<input id="companyWebsite" type="url" class="swal2-input" placeholder="www.devdates.com"><br>'
        + '<br>'
        + '<i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> &nbsp;'
        + '<input id="linkedin" type="url" class="swal2-input" placeholder="https://linkedin.com/richh"><br>'
        + '<br>'
        + '<i class="fa fa-slack fa-2x" aria-hidden="true"></i> &nbsp;'
        + '<input id="slack" type="url" class="swal2-input" placeholder="https://dev-dates.slack.com/messages"><br>'
        + '<br>'
        + '<i class="fa fa-github fa-2x" aria-hidden="true"></i> &nbsp;'
        + '<input id="github" type="url" class="swal2-input" placeholder="https://github.com/richh"><br>'
        + '<br>'
        + '<i class="fa fa-trello fa-2x" aria-hidden="true"></i> &nbsp;'
        + '<input id="trello" type="url" class="swal2-input" placeholder="https://trello.com/b/0NYefHQ3/devdates"><br>'
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
          + '<input id="techStack" type="text" class="swal2-input" placeholder="React, Node, MongoDB"><br>'
          + '<script> <TechnicalSkills /> </script>'
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
        html: '<form id="addTeamMemberForm" action="/action_page.php">'
          + '<label id="labelName" >Name</label>  &nbsp;'
          + '<label id="labelPosition" >Position</label>  &nbsp;'
          + '<br>'
          + '<input id="name1" type="text" class="swal2-input"  placeholder="Richard Hendriks"> &nbsp;'
          + '<input id="position1" type="text" class="swal2-input"  placeholder="Product Owner"><br>'
          + '<br>'
          + '<input id="name2" type="text" class="swal2-input"  placeholder="Gilfoyle"> &nbsp;'
          + '<input id="position2" type="text" class="swal2-input"  placeholder="Developer"><br>'
          + '<br>'
          + '<input id="name3" type="text" class="swal2-input"  placeholder="Jared Dunn"> &nbsp;'
          + '<input id="position3" type="text" class="swal2-input"  placeholder="Scrum Master"><br>'
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

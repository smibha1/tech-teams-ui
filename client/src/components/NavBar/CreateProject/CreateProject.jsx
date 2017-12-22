import React from 'react';
import swal from 'sweetalert2';
import $ from 'jquery';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './CreateProject.css';

class CreateProject extends React.Component {
  handleCreateProjectClick() {
    swal.setDefaults({
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Next &rarr;',
      progressSteps: ['1', '2', '3', '4']
    });

    const steps = [
      {
        title: 'Basic Info',
        text: 'ProjectName',
        width: 800,
        padding: 100,
        animation: true,
        html: '<form class="createProjectForm">' + '<label class="label" >Project Name </label>  &nbsp;' + '<input id="projectName" class="swal2-input" type="text" placeholder="DevDates"><br>' + '<br>' + '<label class="label">Headquarters</label>  &nbsp;' + '<input id="headquarters" class="swal2-input" type="text" placeholder="Los Angeles, CA"><br>' + '<br>' + '<label class="label">Company Logo </label> &nbsp;' + '<input id="logo" class="swal2-input" type="url"  placeholder="http://i.telegraph.co.uk/logo.jpg"><br>' + '<br>' + '<label class="label">Project Description</label>  &nbsp;' + '<input id="projDesc" class="swal2-input" type="text" placeholder="Bringing Devs together"><br>' + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          {
            name: $('#projectName').val(),
            imageurl: $('#logo').val(),
            headquarters: $('#headquarters').val(),
            description: $('#projDesc').val()
          }
        ]
      }, {
        title: 'Project Links',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form class="createProjectForm" >' + '<label class="label"> Your Website </label> &nbsp;' + '<input id="companyWebsite" type="url" class="swal2-input" placeholder="www.devdates.com"><br>' + '<br>' + '<i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> &nbsp;' + '<input id="linkedin" type="url" class="swal2-input" placeholder="https://linkedin.com/richh"><br>' + '<br>' + '<i class="fa fa-slack fa-2x" aria-hidden="true"></i> &nbsp;' + '<input id="slack" type="url" class="swal2-input" placeholder="https://dev-dates.slack.com/messages"><br>' + '<br>' + '<i class="fa fa-github fa-2x" aria-hidden="true"></i> &nbsp;' + '<input id="github" type="url" class="swal2-input" placeholder="https://github.com/richh"><br>' + '<br>' + '<i class="fa fa-trello fa-2x" aria-hidden="true"></i> &nbsp;' + '<input id="trello" type="url" class="swal2-input" placeholder="https://trello.com/b/0NYefHQ3/devdates"><br>' + '</form>',
        focusConfirm: false,
        preConfirm: () => ({
          websites: {
            companyWebsite: $('#companyWebsite').val(),
            linkedin: $('#linkedin').val(),
            slack: $('#slack').val(),
            github: $('#github').val(),
            trello: $('#trello').val()
          }
        })
      }, {
        title: 'Tech Stack',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form>' + '<input id="techStack" type="text" class="swal2-input" placeholder="React, Node, MongoDB"><br>' + '<script> <TechnicalSkills /> </script>' + '</form>',
        focusConfirm: false,
        preConfirm: () => ({techStack: $('#techStack').val()})
      }, {
        title: 'Add Team Members',
        width: 800,
        padding: 100,
        animation: false,
        html: '<form id="addTeamMemberForm">' + '<label id="labelName" >Email</label>  &nbsp;' + '<label id="labelPosition" >Position</label>  &nbsp;' + '<br>' + '<input id="name1" type="text" class="swal2-input"  placeholder="kan@adachi.com"> &nbsp;' + '<input id="position1" type="text" class="swal2-input"  placeholder="Product Owner"><br>' + '<br>' + '<input id="name2" type="text" class="swal2-input"  placeholder="kevinj@hr.com"> &nbsp;' + '<input id="position2" type="text" class="swal2-input"  placeholder="Developer"><br>' + '<br>' + '<input id="name3" type="text" class="swal2-input"  placeholder="justin@kang.com"> &nbsp;' + '<input id="position3" type="text" class="swal2-input"  placeholder="Scrum Master"><br>' + '</form>',
        focusConfirm: false,
        preConfirm: () => [
          {
            name: $('#name1').val(),
            position: $('#position1').val()
          }, {
            name: $('#name2').val(),
            position: $('#position2').val()
          }, {
            name: $('#name3').val(),
            position: $('#position3').val()
          }
        ]
      }
    ];

    swal.queue(steps).then((result) => {
      swal.resetDefaults();
      console.log('result=', result);
      if (result.value) {

        let tech = result.value[2].techStack.split(',').map(stack => {
          return stack.toLowerCase().replace(/\s/g, '');
        });

        let websites = [
          result.value[1].websites.companyWebsite,
          result.value[1].websites.linkedin,
          result.value[1].websites.slack,
          result.value[1].websites.github,
          result.value[1].websites.trello,
        ];

        let notify = result.value[3].map(person => {
          if (person.name !== '') {
            return {
              recipient: person.name,
              position: person.position,
              sender: jwtDecode(localStorage.getItem('token')).email,
              type: 'join'
            }
          }
        }).filter(each => {
          return each;
        })

        let project = {
          name: result.value[0][0].name,
          headquarters: result.value[0][0].headquarters,
          description: result.value[0][0].description,
          imageurl: result.value[0][0].imageurl,
          techstack: JSON.stringify(tech),
          status: 'active',
          websites: JSON.stringify(websites),
          user: jwtDecode(localStorage.getItem('token')).email
        }

        axios({
          url: 'http://localhost:3000/createproject',
          method: 'post',
          data: project
        }).then(res => {
            if(res.status === 200) {
              console.log('MADE A PROJECT!!! I MADE THIS=', res.data);
              swal({title: 'All done!', type: 'success', showConfirmButton: false, timer: 1000})
                .then(() => {
                  notify.forEach(notification => {
                    axios({
                      url: 'http://localhost:3000/createnote',
                      method: 'post',
                      data: notification
                    }).then(res => {
                      console.log('TRYING TO CREATE NOTIFICATION',res);
                      if(res.status === 204) {
                        swal({
                          position: 'top-right',
                          type: 'error',
                          title: `No user with email: ${notification.recipient}`,
                          showConfirmButton: true,
                        })
                      }
                    })
                    .catch(err => {
                      swal({
                        position: 'top-right',
                        type: 'error',
                        title: `Uh oh! Couldn't send request to ${notification.recipient}`,
                        text: err,
                        showConfirmButton: true,
                      })
                    })
                  })
                })
            }
          })
          .catch(err => {
            swal({
              title: 'Uh oh!',
              text: err,
              type: 'error',
              timer: 1300,
              showConfirmButton: true,
            })
          })
        console.log('PROJECT=',project, 'NOTIFY=', notify);

      }


    });
  }

  render() {
    return (<ul id="createProjectsNav">
      <li id="createProj-container" className="nav-link toggle ml-auto">
        <i id="big-bell-navbar" className="fa fa-plus fa-2x pt-2 mt-lr-0" aria-hidden="true" onClick={() => this.handleCreateProjectClick()}/>
      </li>
      <li className="navbar-text visible-xs-inline-block">
        <i id="dropdownPlus" className="fa fa-plus pt-2 mt-lg-0" aria-hidden="true" onClick={() => this.handleCreateProjectClick()}/>
        Create Project
      </li>
    </ul>);
  }
}

export default CreateProject;

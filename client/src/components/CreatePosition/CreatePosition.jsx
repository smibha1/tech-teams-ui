import React from 'react';
import { default as swal } from 'sweetalert2';
import $ from 'jquery';
import './CreatePosition.css';


class CreatePosition extends React.Component {
  handleCreatePositionClick() {
    const { value: formValues } = swal({
      title: 'DevDates Position',
      input: 'checkbox',
      inputValue: 1,
      width: 700,
      inputPlaceholder:
        '&nbsp Open Position',
      confirmButtonText:
        'Continue <i class="fa fa-arrow-right></i>',
      inputValidator: (result) => {
        if (result === 1 && $('#teamMember').val() !== '') {
          return '<div>Either add a Team Member or mark the position as Open</div>';
        }
        console.log('result', result, $('#teamMember').val());
      },

      html:
      '<form id="createPositionForm" action="/action_page.php">'
      + '<div id="positionForm">'
      + '<label id="labelPosition" >Position Name </label>&nbsp;'
      + '<input id="positionName" class="swal2-input" type="text" name="lastname" placeholder="Los Angeles, CA"><br>'
      + '<br>'
      + '<label id="labelPosition"> Requirements </label> &nbsp;'
      + '<input id="positionRequirements" class="swal2-input" type="url" name="lastname" placeholder="http://i.telegraph.co.uk/logo.jpg"><br>'
      + '<br>'
      + '<div id="positionDesctiption-container">'
      + '<label id="positionDescriptionText"> Position Description</label>'
      + '<textarea id="positionDescription"  class="swal2-input"  type="textarea" name="lastname" placeholder="Bringing Devs together"cols="40" rows="5"> </textarea><br>'
      + '</div>'
      + '</div>'
      + '<br>'
      + '<hr id="dividerline">'
      + '<div id="addTeamMember-container>'
      + '<fieldset id="addTeamMember-container">'
      + '<legend>Add Team Member</legend>'
      + '<label id="labelPosition">Team Member</label> &nbsp;'
      + '<input id="teamMember" class="swal2-input"  type="text" name="firstname" placeholder="Product Owner"><br>'
      + '</fieldset>'
      + '<div>'
      + '</form>'
      + '<br>',

      focusConfirm: false,
      preConfirm: () => [{
        PositionName: $('#positionName').val(),
        Requirements: $('#positionRequirements').val(),
        PositionDescription: $('#positionDescription').val(),
        TeamMember: $('#teamMember').val(),
      }],
    }).then((value) => {
      console.log(value);
    }).catch(swal.noop);
  }

  render() {
    return (
      <ul>
        <li
          id="createProj-container"
          className="nav-link toggle ml-auto"
          href="www.google.com"
        >
          <i
            id="big-bell-navbar"
            className="fa fa-user-plus fa-2x pt-2 mt-lg-0"
            aria-hidden="true"
            onClick={() => this.handleCreatePositionClick()}
          />
        </li>
      </ul>
    );
  }
}

export default CreatePosition;

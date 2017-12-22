import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert2';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    e.preventDefault();

    console.log('CLICKED SEARCH SUBMIT', this.props);
    let query = $("#query").val();

    if(query) {
      console.log('Tryna search for=', query);
      axios({method: 'post', url: 'http://localhost:3000/projectsearch', data: {query: query}})
        .then(res => {
          console.log("DB RESPONSE TO SEARCH=", res);
          // this.props.history.push('searchresults')
        })
        .catch(err => {
          swal({
            title: 'Uh oh',
            type: 'error',
            text: err,
            timer: 1500,
            showConfirmButton: false
          })
        })
    }
    $('#query').val('');
  }

  render () {
    return (
      <form className="form-inline mr-left mt-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" id='query'/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleSearchSubmit}>
          <span className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    )
  }
}

export default Search;

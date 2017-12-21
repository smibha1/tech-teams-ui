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
    // axios post
      // get something
      // use action to put into store

    if(query) {
      console.log('Tryna search for=', query);
      this.props.history.push('searchresults')
    } else {
      // swal({
      //   title: 'Uh oh!',
      //   text: 'Please input something to search!',
      //   timer: 1500,
      //   type: 'error',
      //   showConfirmButton: false
      // })
      console.log('Enter something to search yo');

    }

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





// const Search = props => (
  // <form className="form-inline mr-left mt-2 my-lg-0">
  //   <input className="form-control mr-sm-2" type="text" placeholder="Search" />
  //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
  //     <span className="fa fa-search" aria-hidden="true" />
  //   </button>
  // </form>
// );
// export default Search;

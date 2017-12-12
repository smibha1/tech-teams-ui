import React from 'react';
// import { Link } from 'react-router-dom';
import './Search.css';

const Search = props => (
  <form className="form-inline mr-left mt-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
      <span className="fa fa-search" aria-hidden="true" />
    </button>
  </form>
);


export default Search;


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Projects.css';
// import ProjectsContainer from '../../containers/Projects/ProjectsContainer';

const Projects = props => (
  <div className="dropdown-item">

    {props.projects.map((element, index) => (
      <span key={element.id} id="proj-container" index={index}>
        <img
          id="projLogo-dropdown"
          src={element.image}
          alt="Project Logo"
        /> &nbsp;
        <Link to={`/${element.projname}`} href={`/${element.projname}`}>
          <span id="projName">
            {element.projname}
          </span>
          <br />
        </Link>
      </span>
    ))}
  </div>
);


Projects.propTypes = {
  projects: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

export default Projects;

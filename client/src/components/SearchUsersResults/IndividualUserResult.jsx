import React from 'react';
import PropTypes from 'prop-types';

class IndividualUserResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interview: this.props.element.interview,
    };

    this.toggleInterview = this.toggleInterview.bind(this);
  }

  toggleInterview() {
    this.setState({ interview: !this.state.interview });
  }

  render() {
    return (
      <div className="individualProject">
        <div className="searchProject-projectImg">
          <img
            src={this.props.element.userImage}
            alt={this.props.element.userName}
            height="100"
          />
        </div>
        <div className="searchProject-projectInfo" >
          <span onClick={this.toggleDesc}>
            <strong> {this.props.element.userName} </strong>
          </span>
          <button className="btn-interview" onClick={this.toggleInterview}>
            {this.state.interview ? 'Interview Sent' : 'Interview'}
          </button> <br />
          {this.props.element.userTechStack}
        </div>
      </div>
    );
  }
}

export default IndividualUserResult;

IndividualUserResult.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

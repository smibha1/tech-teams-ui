import React from 'react';
import './individualProjectResult.css';

class IndividualProjectResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interview: this.props.element.interview,
      showDesc: false,
    }

    this.toggleDesc = this.toggleDesc.bind(this);
    this.toggleInterview = this.toggleInterview.bind(this);
  }

  toggleDesc() {
    this.setState({showDesc: !this.state.showDesc});
  }

  toggleInterview() {
    this.setState({interview: !this.state.interview});
  }

  render() {
    return (
      <div className="individualProject">
        <div className="searchProject-projectImg">
        <img src={this.props.element.projectImage} alt={this.props.element.projectName} height="100" />
        </div>
        <div className="searchProject-projectInfo" >
        <span onClick={this.toggleDesc}> <strong> {this.props.element.projectName} </strong> </span>
        <button className="btn-interview" name={this.props.index} onClick={this.toggleInterview}>
          {this.state.interview ? 'Interview Sent' : 'Interview'} 
        </button> <br />
        {this.state.showDesc ? this.props.element.projectDesc : null}
        </div>
      </div>
    )
  }

}

export default IndividualProjectResult;

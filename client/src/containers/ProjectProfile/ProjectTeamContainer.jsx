import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ProjectTeam from '../../components/ProjectProfile/ProjectTeam';

function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    projectTeam: state.projectTeam,
  }
=======
    teammembers: [
      { name: 'Paul Rudd', position: 'Product Owner', image: 'http://bit.ly/2BHEVD8' },
      { name: 'Gilfoyle Dunn', position: 'Scrum Master', image: 'http://www.piedpiper.com/app/themes/pied-piper/dist/images/gilfoyle.png' },
    ],
    openPositions: [
      { position: 'Open UI/UX Position' },
    ],
  };
>>>>>>> [style]
}

export default connect(mapStateToProps)(ProjectTeam);



// {
//   teammembers: [
//     { name: 'Paul Rudd', position: 'Product Owner', image: 'http://bit.ly/2BHEVD8' },
//     { name: 'Tony Stark', position: 'Scrum Master', image: 'http://bit.ly/2BF6i0p' },
//   ],
//   openPositions: [
//     { position: 'Open UI/UX Position' },
//   ],
// };
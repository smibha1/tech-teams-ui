import { connect } from 'react-redux';
import AlertsComponent from '../../components/NavBar/Alerts/Alerts';

function mapStateToProps(state) {
  return {
    alerts: state.alerts,
  };
}

export default connect(mapStateToProps)(AlertsComponent);

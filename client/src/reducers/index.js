// // Purpose of this page is to aggregate all the reducers into one reducer file..
// // What you'll be doing here is importing each reducer function and
// passing it as a key-value pair,
// // like in a normal object
//

import { combineReducers } from 'redux';
import saveNewSkillReducer from './Profile/updateTechSkill';
import updateDevInfoReducer from './Profile/updateDevInfo';
import updateCurrentProjectsReducer from '../reducers/Profile/updateCurrentProjects';
import updateCompletedProjectsReducer from '../reducers/Profile/updateCompletedProjects';
import updateSearchProjectsResultsReducer from '../reducers/SearchProjectsResults/updateProjectsResultsReducer';
import saveNewProjectsReducer from './Projects/updateProjects';
import viewAlertsReducer from './Alerts/updateAlerts';
import updateSignup from './Auth/updateSignup';

const allReducers = combineReducers({

  userInfo: updateSignup,
  techskills: saveNewSkillReducer,
  devInfo: updateDevInfoReducer,
  currentProjects: updateCurrentProjectsReducer,
  completedProjects: updateCompletedProjectsReducer,
  projectsResults: updateSearchProjectsResultsReducer,
  projects: saveNewProjectsReducer,
  alerts: viewAlertsReducer,
});

export default allReducers;

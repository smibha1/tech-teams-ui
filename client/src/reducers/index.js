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
import updateSearchUsersResultsReducer from '../reducers/SearchUsersResults/updateUsersResultsReducer';
import saveNewProjectsReducer from './Projects/updateProjects';
import viewAlertsReducer from './Alerts/updateAlerts';
import updateSignup from './Auth/updateSignup';
import updateLinksReducer from './ProjectProfile/updateLinks';
import updateProjectBlurbReducer from './ProjectProfile/updateProjectBlurb';
import updateAllOthersReducer from './ProjectProfile/updateAllOthers';
import setUserProfileInformation from './Profile/setUserProfileInformation';

const allReducers = combineReducers({

  alluserinfo: setUserProfileInformation,
  userInfo: updateSignup,
  tech: saveNewSkillReducer,
  devInfo: updateDevInfoReducer,
  currentProjects: updateCurrentProjectsReducer,
  completedProjects: updateCompletedProjectsReducer,
  projectsResults: updateSearchProjectsResultsReducer,
  usersResults: updateSearchUsersResultsReducer,
  projects: saveNewProjectsReducer,
  alerts: viewAlertsReducer,
  links: updateLinksReducer,
  projectName: 'FILL_THIS_IN_WHEN_AXIOS_WORKS',
  projectImage: 'FILL_THIS_IN_WHEN_AXIOS_WORKS',
  projectBlurb: updateProjectBlurbReducer,
  projectLocation: updateAllOthersReducer,
  projectDescription: updateAllOthersReducer,
});

export default allReducers;

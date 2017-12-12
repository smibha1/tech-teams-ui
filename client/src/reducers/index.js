// // Purpose of this page is to aggregate all the reducers into one reducer file..
// // What you'll be doing here is importing each reducer function and
// passing it as a key-value pair,
// // like in a normal object
//

import { combineReducers } from 'redux';
import saveNewSkillReducer from './Profile/updateTechSkill';
import updateDevInfoReducer from './Profile/updateDevInfo';

const allReducers = combineReducers({
  techSkills: saveNewSkillReducer,
  devInfo: updateDevInfoReducer,
});

export default allReducers;

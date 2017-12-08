// // Purpose of this page is to aggregate all the reducers into one reducer file..
// // What you'll be doing here is importing each reducer function and
// passing it as a key-value pair,
// // like in a normal object
//
import { combineReducers } from 'redux';
import exampleReducer from './ExamplePage/exampleReducer';

const allReducers = combineReducers({
  
});

export default allReducers;

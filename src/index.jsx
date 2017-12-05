// Staging ground to render onto HTML

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import App from './components/app.jsx';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));



// JAKE'S TEST CODE, NOT SURE WHAT TO DO WITH IT, SO LEAVING IT AT THE BOTTOM HERE

// import React from 'react';
// // import ReactDOM from 'react-dom';
// // Import App from components
// const Test = () => (
//   <div>
//     <h2>Testing for linter {1 + 1}</h2>
//     <h3>double checking for linter</h3>
//   </div>
// );

// export default Test;

// // ReactDOM.render(<App />, document.getElementById('root'))

// Staging ground to render onto HTML

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import allReducers from './reducers';
import App from './components/App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(allReducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

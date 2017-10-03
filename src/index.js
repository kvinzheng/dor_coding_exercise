import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import reducer from './reducers';
import './index.css';
import * as Api from './utils/Api';

// store creation
export const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api })),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

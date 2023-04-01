import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import rootReducers from './store/actions.reducers';
import thunk  from 'redux-thunk';

// Middleware is passed into store
// second middleware will create a new action to reverse direction once "10" is reached
//const store = legacy_createStore(rootReducers, applyMiddleware(myLogger, reverseDirectionAtTen, thunk))
const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

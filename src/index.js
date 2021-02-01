import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhishApp from './PhishApp';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './Redux/store/index'

ReactDOM.render(
  <Provider store={store}>
    <PhishApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

window.renderDogs = (containerId, history) => {
  ReactDOM.render(
      <App history={history} />
    ,
    document.getElementById(containerId),
  );
  // serviceWorker.unregister();
};

window.unmountDogs = containerId => {
  if (document.getElementById(containerId)) { ReactDOM.unmountComponentAtNode(document.getElementById(containerId)); }
};

if (!document.getElementById('Dogs-container')) {
  ReactDOM.render(
      <App />
    , document.getElementById('root'));
  // serviceWorker.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

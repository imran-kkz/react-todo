import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyApp() {
  return (
    <ul>
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
    </ul>
  )
}

// JSX 
ReactDOM.render(
  <MyApp/>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

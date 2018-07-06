import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import logo from './assets/logo.svg';

const App = () => (
  <div>
    <h1>Hello React</h1>
    <img src={logo} alt="react" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

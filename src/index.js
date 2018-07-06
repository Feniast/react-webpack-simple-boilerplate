import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import logo from './assets/logo.svg';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <img src={logo} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
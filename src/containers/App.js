import React from 'react';
import logo from '../assets/logo.svg';
import Router from './Router';

const hello = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
};

export default class App extends React.Component {
  state = {
    message: 'Hello React'
  }

  componentDidMount() {
    hello().then(() => this.setState({
      message: 'Hello World'
    }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <img src={logo} alt="react" />
        <Router />
      </div>
    );
  }
}

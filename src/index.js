import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import logo from './assets/logo.svg';

const hello = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
};

class App extends React.Component {
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

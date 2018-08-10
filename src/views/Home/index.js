import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Home.scss';

class Home extends React.Component {
  state = {
    message: 'Hello React'
  };

  render() {
    const { message } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{message}</h1>
        <img className={styles.logo} src={logo} alt="react" />
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.typeof(Store).isRequired
};

export default Root;

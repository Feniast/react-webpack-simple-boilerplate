import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../App';
import Devtools from '../Devtools';

const Root = ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <App />
      <Devtools />
    </React.Fragment>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.typeof(Store).isRequired
};

export default Root;

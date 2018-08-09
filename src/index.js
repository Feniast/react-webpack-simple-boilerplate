import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('app'));

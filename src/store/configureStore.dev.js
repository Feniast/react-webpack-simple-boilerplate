import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import Devtools from '../containers/Devtools';


const getDebugSessionKey = () => {
  const matches = window.location.search.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length) > 0 ? matches[1] : null;
};

const enhancer = compose(
  applyMiddleware(thunk),
  Devtools.instrument(),
  persistState(getDebugSessionKey())
);


export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

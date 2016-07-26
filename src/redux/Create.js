import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Synthesizer from './modules/Synthesizer';
import Keys from './modules/Keys';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : func => func
)(createStore);

export default function() {
  const reducerCombo = combineReducers({
    Synthesizer,
    Keys
  });
  const createStoreWithMiddleware = applyMiddleware(thunk)(finalCreateStore);
  return createStoreWithMiddleware(reducerCombo);
}

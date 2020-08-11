import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './redux/reducer';

export const _store =  createStore(
  reducer,
  process.env.REACT_APP_MODE === 'production' ? compose(applyMiddleware(thunk)) : composeWithDevTools(applyMiddleware(thunk))
);

export const store = _store; 


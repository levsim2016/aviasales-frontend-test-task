import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from 'app/reducers/appReducer';
import { IAppState } from 'app/interfaces/IAppState';
import thunk from 'redux-thunk';

const middlewareEnhancer = applyMiddleware(thunk);
const storeWithReduxDevTools = composeWithDevTools(middlewareEnhancer);

export function configureAppStore(): Store<IAppState> {
  return createStore(appReducer, undefined, storeWithReduxDevTools);
}

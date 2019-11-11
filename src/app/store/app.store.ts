import { createStore, Action, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from 'app/reducers/app.reducer';
import { IAppState } from 'app/interfaces/IAppState';

export function configureAppStore(): Store<IAppState, Action> {
  return createStore(appReducer, composeWithDevTools());
}

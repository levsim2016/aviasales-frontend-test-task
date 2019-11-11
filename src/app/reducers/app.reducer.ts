import { IAppState } from 'app/interfaces/IAppState';
import { Action } from 'redux';

const initialState: IAppState = {
  tickets: [],
};

export function appReducer(
  state: IAppState = initialState,
  action: Action
): IAppState {
  switch (action.type) {
    default:
      return state;
  }
}

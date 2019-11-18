import { AnyAction } from 'redux';

import { IAppState } from 'app/interfaces/IAppState';
import { ISetTicketsAction, SET_TICKETS } from 'app/actions/SetTicketsAction';
import {
  ISetSearchIdAction,
  SET_SEARCH_ID,
} from 'app/actions/SetSearchIdAction';

const initialState: IAppState = {
  tickets: [],
  searchId: '',
};

type ActionsUnion = ISetTicketsAction | ISetSearchIdAction;

export function appReducer(
  state: IAppState = initialState,
  action: ActionsUnion | AnyAction
) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };

    case SET_SEARCH_ID:
      return {
        ...state,
      };

    default:
      return state;
  }
}

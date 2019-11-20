import { AnyAction } from 'redux';

import { IAppState } from 'app/interfaces/IAppState';
import { ISetTicketsAction } from 'app/actions/SetTicketsAction';
import { ISetSearchIdAction } from 'app/actions/SetSearchIdAction';

const initialState: IAppState = {
  tickets: [],
  searchId: '',
};

type ActionsUnion = ISetTicketsAction | ISetSearchIdAction;

export function appReducer(
  state: IAppState = initialState,
  action: ActionsUnion | AnyAction
) {
  const appAction = action as ActionsUnion;

  switch (appAction.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        tickets: appAction.tickets,
      };

    case 'SET_SEARCH_ID':
      return {
        ...state,
        searchId: appAction.searchId,
      };

    default:
      return state;
  }
}

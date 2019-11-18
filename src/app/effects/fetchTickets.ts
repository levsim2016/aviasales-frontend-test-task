import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator } from 'redux';

import { ITicket } from 'app/interfaces/ITicket';
import {
  ISetTicketsAction,
  setTicketsAction,
} from 'app/actions/SetTicketsAction';

export const fetchTickets: ActionCreator<
  ThunkAction<Promise<ISetTicketsAction>, ITicket[], null, ISetTicketsAction>
> = () => {
  return async (dispatch: Dispatch) => {
    const tickets: ITicket[] = await Promise.resolve([]);
    console.log(`Amount of received tickets: ${tickets.length}`);

    return dispatch(setTicketsAction(tickets));
  };
};

import { ITicket } from 'app/interfaces/ITicket';

export const SET_TICKETS = 'SET_TICKETS';

export interface ISetTicketsAction {
  readonly type: typeof SET_TICKETS;
  tickets: ITicket[];
}

export const setTicketsAction = (tickets: ITicket[]): ISetTicketsAction => {
  return {
    type: SET_TICKETS,
    tickets: tickets,
  };
};

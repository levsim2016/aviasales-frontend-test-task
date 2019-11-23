import { ISetTicketsAction } from 'app/actions/SetTicketsAction';
import { ITicket } from './ITicket';

export interface ISubscribedTicketsListProps {
    tickets: ITicket[];
    fetchTickets: () => Promise<ISetTicketsAction>;
}

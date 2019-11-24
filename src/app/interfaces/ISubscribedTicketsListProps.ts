import { ITicket } from './ITicket';

import { ISetTicketsAction } from 'app/actions/SetTicketsAction';
import { ISetSearchIdAction } from 'app/actions/SetSearchIdAction';

export interface ISubscribedTicketsListProps {
    tickets: ITicket[];
    loadingStatus: boolean;
    fetchTickets: () => Promise<ISetTicketsAction>;
    updateTickets: () => Promise<ISetTicketsAction>;
    getSearchId: () => Promise<ISetSearchIdAction>;
}

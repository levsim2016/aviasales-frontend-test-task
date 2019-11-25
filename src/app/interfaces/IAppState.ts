import { ITicket } from './ITicket';
import { ITicketFilters } from './ITicketFilters';

export interface IAppState {
    tickets: ITicket[];
    isTicketsLoading: boolean;
    searchId: string;
    ticketFilters: ITicketFilters;
}

import { ITicket } from './ITicket';
import { ITransfersFilters } from './ITransfersFilters';

export interface IAppState {
    tickets: ITicket[];
    isTicketsLoading: boolean;
    searchId: string;
    transfersFilters: ITransfersFilters;
}

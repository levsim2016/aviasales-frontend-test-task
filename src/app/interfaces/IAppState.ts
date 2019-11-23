import { ITicket } from './ITicket';
import { ISearchIdResponse } from './ISearchIdResponse';

export interface IAppState {
    tickets: ITicket[];
    searchId: ISearchIdResponse['searchId'];
}

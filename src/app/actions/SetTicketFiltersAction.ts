import { ITicketFilters } from 'app/interfaces/ITicketFilters';

export const SET_TICKET_FILTERS_ACTION = 'SET_TICKET_FILTERS_ACTION';

export interface ISetTicketFiltersAction {
    readonly type: typeof SET_TICKET_FILTERS_ACTION;
    filters: ITicketFilters;
}

export const setTicketFiltersAction = (
    filters: ITicketFilters
): ISetTicketFiltersAction => {
    return {
        type: SET_TICKET_FILTERS_ACTION,
        filters: filters,
    };
};

import { AnyAction } from 'redux';

import { IAppState } from 'app/interfaces/IAppState';
import { ISetTicketsAction } from 'app/actions/SetTicketsAction';
import { ISetSearchIdAction } from 'app/actions/SetSearchIdAction';
import { ISetTicketsLoadingStatusAction } from 'app/actions/SetTicketsLoadingStatusAction';
import { ISetTransfersFiltersAction } from 'app/actions/SetTransfersFiltersAction';

const initialState: IAppState = {
    tickets: [],
    isTicketsLoading: false,
    searchId: '',
    transfersFilters: {
        filterByTransfers: true,
        filterByTransfersAmount: {},
    },
};

type ActionsUnion =
    | ISetTicketsAction
    | ISetSearchIdAction
    | ISetTicketsLoadingStatusAction
    | ISetTransfersFiltersAction;

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

        case 'SET_TICKETS_LOADING_STATUS':
            return {
                ...state,
                isTicketsLoading: appAction.status,
            };

        case 'SET_TRANSFERS_FILTERS_ACTION':
            return {
                ...state,
                ticketFilters: appAction.filters,
            };

        default:
            return state;
    }
}

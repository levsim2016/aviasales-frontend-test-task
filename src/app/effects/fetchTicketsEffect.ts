import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator } from 'redux';

import {
    ISetTicketsAction,
    setTicketsAction,
} from 'app/actions/SetTicketsAction';
import { IAppState } from 'app/interfaces/IAppState';
import { ITicket } from 'app/interfaces/ITicket';
import { ISearchIdResponse } from 'app/interfaces/ISearchIdResponse';
import { getTicketsFromApi } from 'app/api/getTicketsFromApi';

async function resolveGetTicketsRequests(
    searchId: ISearchIdResponse['searchId']
) {
    let queueResult: ITicket[] = [];
    let isQueueFulfilled = false;
    while (isQueueFulfilled !== true) {
        const nextResponse = await getTicketsFromApi(searchId);

        if (nextResponse === null) {
            continue;
        }

        isQueueFulfilled = nextResponse.stop;
        queueResult = [...queueResult, ...nextResponse.tickets];
    }
    return queueResult;
}

export const fetchTicketsEffect: ActionCreator<
    ThunkAction<Promise<ISetTicketsAction>, IAppState, null, ISetTicketsAction>
> = () => {
    return async (dispatch: Dispatch, getState) => {
        const { searchId } = getState();
        const tickets = await resolveGetTicketsRequests(searchId);

        const preparedToStoreTickets = tickets.map(ticket => {
            return {
                ...ticket,
                segments: ticket.segments.map(segment => {
                    return {
                        ...segment,
                        date: new Date(segment.date),
                    };
                }),
            };
        });

        return dispatch(setTicketsAction(preparedToStoreTickets));
    };
};

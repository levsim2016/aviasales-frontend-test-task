import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator } from 'redux';

import {
    ISetTicketsAction,
    setTicketsAction,
} from 'app/actions/SetTicketsAction';
import { IAppState } from 'app/interfaces/IAppState';
import { getTicketsFromApi } from 'app/api/getTicketsFromApi';
import { setTicketsLoadingStatusAction } from 'app/actions/SetTicketsLoadingStatusAction';
import { prepareTicketsForStore } from 'app/common/prepareTicketsForStore';

export const fetchTicketsEffect: ActionCreator<
    ThunkAction<Promise<ISetTicketsAction>, IAppState, null, ISetTicketsAction>
> = () => {
    return async (dispatch: Dispatch, getState) => {
        dispatch(setTicketsLoadingStatusAction(true));

        const { searchId } = getState();
        const response = await getTicketsFromApi(searchId);

        if (response === null) {
            return fetchTicketsEffect()(dispatch, getState, null);
        }

        dispatch(setTicketsLoadingStatusAction(false));

        const preparedTickets = prepareTicketsForStore(response.tickets);
        return dispatch(setTicketsAction(preparedTickets));
    };
};

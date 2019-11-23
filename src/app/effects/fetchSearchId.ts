import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator } from 'redux';

import { ISearchIdResponse } from 'app/interfaces/ISearchIdResponse';
import {
    ISetSearchIdAction,
    setSearchIdentifierAction,
} from 'app/actions/SetSearchIdAction';
import { getSearchIdFromApi } from 'app/api/getSearchIdFromApi';

export const fetchSearchId: ActionCreator<
    ThunkAction<
        Promise<ISetSearchIdAction>,
        ISearchIdResponse,
        null,
        ISetSearchIdAction
    >
> = () => {
    return async (dispatch: Dispatch) => {
        const searchIdResponse = await getSearchIdFromApi();
        console.log(`Search identifier: ${searchIdResponse.searchId}`);

        return dispatch(setSearchIdentifierAction(searchIdResponse.searchId));
    };
};

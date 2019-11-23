import { ThunkAction } from 'redux-thunk';
import { Dispatch, ActionCreator } from 'redux';

import {
    ISetSearchIdAction,
    setSearchIdentifierAction,
} from 'app/actions/SetSearchIdAction';
import { getSearchIdFromApi } from 'app/api/getSearchIdFromApi';

export const getSearchIdEffect: ActionCreator<
    ThunkAction<Promise<ISetSearchIdAction>, null, null, ISetSearchIdAction>
> = () => {
    return async (dispatch: Dispatch) => {
        const response = await getSearchIdFromApi();

        return dispatch(setSearchIdentifierAction(response.searchId));
    };
};

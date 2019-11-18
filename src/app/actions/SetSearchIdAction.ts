import { AnyAction } from 'redux';
import { ISearchIdResponse } from 'app/interfaces/ISearchIdResponse';

export const SET_SEARCH_ID = 'SET_SEARCH_ID';

export interface ISetSearchIdAction extends AnyAction {
  type: typeof SET_SEARCH_ID;
  searchIdentifier: ISearchIdResponse['searchId'];
}

export const setSearchIdentifierAction = (
  searchId: ISetSearchIdAction['searchIdentifier']
): ISetSearchIdAction => {
  return {
    type: SET_SEARCH_ID,
    searchIdentifier: searchId,
  };
};

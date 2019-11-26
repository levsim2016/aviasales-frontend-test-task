import { ITransfersFilters } from 'app/interfaces/ITransfersFilters';

export const SET_TRANSFERS_FILTERS_ACTION = 'SET_TRANSFERS_FILTERS_ACTION';

export interface ISetTransfersFiltersAction {
    readonly type: typeof SET_TRANSFERS_FILTERS_ACTION;
    filters: ITransfersFilters;
}

export const setTransfersFiltersAction = (
    filters: ITransfersFilters
): ISetTransfersFiltersAction => {
    return {
        type: SET_TRANSFERS_FILTERS_ACTION,
        filters: filters,
    };
};

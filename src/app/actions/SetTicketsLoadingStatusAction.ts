export const SET_TICKETS_LOADING_STATUS = 'SET_TICKETS_LOADING_STATUS';

export interface ISetTicketsLoadingStatusAction {
    readonly type: typeof SET_TICKETS_LOADING_STATUS;
    status: boolean;
}

export const setTicketsLoadingStatusAction = (
    status: boolean
): ISetTicketsLoadingStatusAction => {
    return {
        type: SET_TICKETS_LOADING_STATUS,
        status: status,
    };
};

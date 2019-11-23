import { AnyAction } from 'redux';

import { IAppState } from 'app/interfaces/IAppState';
import { ISetTicketsAction, SET_TICKETS } from 'app/actions/SetTicketsAction';

const initialState: IAppState = {
    tickets: [
        {
            price: 43667,
            carrier: 'S7',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: new Date('2019-11-22T15:27:00.000Z'),
                    stops: ['DXB', 'KUL', 'AUH'],
                    duration: 1891,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: new Date('2019-12-12T04:21:00.000Z'),
                    stops: [],
                    duration: 1494,
                },
            ],
        },
        {
            price: 67002,
            carrier: 'EK',
            segments: [
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: new Date('2019-11-21T21:18:00.000Z'),
                    stops: [],
                    duration: 666,
                },
                {
                    origin: 'MOW',
                    destination: 'HKT',
                    date: new Date('2019-12-12T07:10:00.000Z'),
                    stops: ['AUH'],
                    duration: 1734,
                },
            ],
        },
    ],
};

type ActionsUnion = ISetTicketsAction;

export function appReducer(
    state: IAppState = initialState,
    action: ActionsUnion | AnyAction
) {
    switch (action.type) {
        case SET_TICKETS:
            return {
                ...state,
                tickets: action.tickets,
            };
        default:
            return state;
    }
}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from 'app/interfaces/IAppState';
import { AnyAction } from 'redux';

import { ISubscribedTicketsListProps } from 'app/interfaces/ISubscribedTicketsListProps';
import { TicketsList } from 'app/components/tickets-list/TicketsList';

import { fetchTicketsEffect } from 'app/effects/fetchTicketsEffect';
import { getSearchIdEffect } from 'app/effects/getSearchIdEffect';

const mapStateToProps = (store: IAppState) => {
    return {
        tickets: store.tickets,
        searchId: store.searchId,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchTickets: () => dispatch(fetchTicketsEffect()),
        getSearchId: () => dispatch(getSearchIdEffect()),
    };
};

const SubscribedTicketsList: React.FC<ISubscribedTicketsListProps> = (
    props: ISubscribedTicketsListProps
) => {
    const { tickets, getSearchId, fetchTickets } = props;

    useEffect(() => {
        getSearchId().then(() => fetchTickets());
    }, [fetchTickets, getSearchId]);

    return <TicketsList tickets={tickets}></TicketsList>;
};

export const TicketsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedTicketsList);

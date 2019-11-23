import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from 'app/interfaces/IAppState';
import { AnyAction } from 'redux';

import { ISubscribedTicketsListProps } from 'app/interfaces/ISubscribedTicketsListProps';
import { TicketsList } from 'app/components/tickets-list/TicketsList';

import { fetchTickets } from 'app/effects/fetchTickets';
import { fetchSearchId } from 'app/effects/fetchSearchId';

const mapStateToProps = (store: IAppState) => {
    return {
        tickets: store.tickets,
        searchId: store.searchId,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchTickets: () => dispatch(fetchTickets()),
        fetchSearchId: () => dispatch(fetchSearchId()),
    };
};

const SubscribedTicketsList: React.FC<ISubscribedTicketsListProps> = ({
    tickets,
    fetchTickets,
    fetchSearchId,
}) => {
    useEffect(() => {
        fetchTickets();
        fetchSearchId();
    }, [fetchTickets, fetchSearchId]);

    return <TicketsList tickets={tickets}></TicketsList>;
};

export const TicketsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedTicketsList);

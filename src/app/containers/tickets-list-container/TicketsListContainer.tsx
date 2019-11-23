import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from 'app/interfaces/IAppState';
import { AnyAction } from 'redux';

import { ISubscribedTicketsListProps } from 'app/interfaces/ISubscribedTicketsListProps';
import { TicketsList } from 'app/components/tickets-list/TicketsList';
import { fetchTickets } from 'app/effects/fetchTickets';

const mapStateToProps = (store: IAppState) => {
    return {
        tickets: store.tickets,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchTickets: () => dispatch(fetchTickets()),
    };
};

const SubscribedTicketsList: React.FC<ISubscribedTicketsListProps> = ({
    tickets,
    fetchTickets,
}) => {
    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    return <TicketsList tickets={tickets}></TicketsList>;
};

export const TicketsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedTicketsList);

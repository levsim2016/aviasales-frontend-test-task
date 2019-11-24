import React, { RefObject, createRef } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from 'app/interfaces/IAppState';
import { AnyAction } from 'redux';

import { ISubscribedTicketsListProps } from 'app/interfaces/ISubscribedTicketsListProps';
import { TicketsList } from 'app/components/tickets-list/TicketsList';

import { fetchTicketsEffect } from 'app/effects/fetchTicketsEffect';
import { getSearchIdEffect } from 'app/effects/getSearchIdEffect';
import { TICKETS_AMOUNT_TO_SHOW } from 'app/constants/ticketsAmountToShow';
import { getTicketsSection } from 'app/selectors/getTicketsSection';
import { ISubscribedTicketsListState } from 'app/interfaces/ISubscribedTicketsListState';
import { updateTicketsEffect } from 'app/effects/updateTicketsEffect';

const mapStateToProps = (store: IAppState) => {
    return {
        tickets: store.tickets,
        loadingStatus: store.isTicketsLoading,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchTickets: () => dispatch(fetchTicketsEffect()),
        updateTickets: () => dispatch(updateTicketsEffect()),
        getSearchId: () => dispatch(getSearchIdEffect()),
    };
};

class SubscribedTicketsList extends React.Component<
    ISubscribedTicketsListProps,
    ISubscribedTicketsListState
> {
    private listContainerRef: RefObject<HTMLDivElement>;

    constructor(props: ISubscribedTicketsListProps) {
        super(props);
        this.listContainerRef = createRef();

        this.state = {
            shownItemsAmount: TICKETS_AMOUNT_TO_SHOW,
        };
    }

    async componentDidMount() {
        const { getSearchId, fetchTickets } = this.props;

        await getSearchId();
        await fetchTickets();

        window.addEventListener('scroll', this.updateTicketsOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateTicketsOnScroll);
    }

    private updateTicketsOnScroll = () => {
        if (this.props.loadingStatus === true) {
            return;
        }

        const listElement = this.listContainerRef.current;
        if (listElement === null) {
            return;
        }

        const { tickets } = this.props;
        const { shownItemsAmount } = this.state;

        const hasToUpdate =
            tickets.length - shownItemsAmount < TICKETS_AMOUNT_TO_SHOW;

        if (hasToUpdate === true) {
            this.props.updateTickets();
        }

        const listBounds = listElement.getBoundingClientRect() as ClientRect;
        const listBottomOffset = listBounds.bottom - window.innerHeight;

        if (listBottomOffset <= 0) {
            this.setState({
                shownItemsAmount: shownItemsAmount + TICKETS_AMOUNT_TO_SHOW,
            });
        }
    };

    render() {
        const { tickets } = this.props;
        const { shownItemsAmount } = this.state;

        const ticketsSection = getTicketsSection(tickets, shownItemsAmount);

        return (
            <div ref={this.listContainerRef}>
                <TicketsList tickets={ticketsSection}></TicketsList>
            </div>
        );
    }
}

export const TicketsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribedTicketsList);

import React from 'react';
import { useSelector } from 'react-redux';
import { TicketsList } from 'app/components/tickets-list/TicketsList';
import { getTickets } from 'app/selectors/getTickets';

export const TicketsListContainer: React.FC = () => {
  const tickets = useSelector(getTickets);

  return <TicketsList tickets={tickets}></TicketsList>;
};

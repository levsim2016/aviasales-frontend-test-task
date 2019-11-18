import React, { Fragment } from 'react';
import styles from './tickets-list.module.scss';

import { ITicketsListProps } from 'app/interfaces/ITicketsListProps';
import { Ticket } from 'app/components/ticket/Ticket';

export const TicketsList: React.FC<ITicketsListProps> = (
  props: ITicketsListProps
) => {
  const { tickets } = props;

  return (
    <Fragment>
      {tickets.map((ticket, i) => (
        <Ticket
          className={styles.ticket}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
          key={i}
        ></Ticket>
      ))}
    </Fragment>
  );
};

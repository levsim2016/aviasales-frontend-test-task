import React from 'react';
import styles from './ticket.module.scss';

import Card from 'ui-elements/components/card/Card';
import RouteDetails from '../route-details/RouteDetails';
import { ITicketProps } from 'app/interfaces/ITicketProps';

export const Ticket: React.FC<ITicketProps> = (props: ITicketProps) => {
  const { ticketCard, header, priceLabel, carrierLogoWrapper } = styles;
  const { price, carrier } = props;

  const ticketClassString = [ticketCard, props.className].join(' ');

  return (
    <Card className={ticketClassString}>
      <div className={header}>
        <h3 className={priceLabel}>{price}</h3>
        <div className={carrierLogoWrapper}>
          <img
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            alt='Logo of airline'
          />
        </div>
      </div>
      <ul className={styles.routes}>
        <RouteDetails
          origin='MOW'
          destination='HKT'
          date='2121421412'
          duration={435}
          stops={['HKG', 'JNB']}
        ></RouteDetails>
        <RouteDetails
          origin='HKT'
          destination='MOW'
          date='2121421412'
          duration={435}
          stops={['HKG', 'JNB']}
        ></RouteDetails>
      </ul>
    </Card>
  );
};

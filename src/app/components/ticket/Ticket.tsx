import React from 'react';
import styles from './ticket.module.scss';

import Card from 'ui-elements/components/card/Card';
import RouteDetails from '../route-details/RouteDetails';
import { ITicketProps } from 'app/interfaces/ITicketProps';
import { CARRIERS_LOGO_CDN_URL } from 'app/constants/carrierLogoCdnUrl';

function getCarrierLogoUrl(carrierIataCode: string): string {
  return CARRIERS_LOGO_CDN_URL + carrierIataCode + '.png';
}

export const Ticket: React.FC<ITicketProps> = (props: ITicketProps) => {
  const { ticketCard, header, priceLabel, carrierLogoWrapper } = styles;
  const { price, carrier } = props;

  const ticketClassesString = [ticketCard, props.className].join(' ');

  return (
    <Card className={ticketClassesString}>
      <div className={header}>
        <h3 className={priceLabel}>{price}</h3>
        <div className={carrierLogoWrapper}>
          <img src={getCarrierLogoUrl(carrier)} alt='Logo of airline' />
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

import React from 'react';
import styles from './ticket.module.scss';

import Card from 'ui-elements/components/card/Card';
import RouteDetails from '../route-details/RouteDetails';
import { ITicketProps } from 'app/interfaces/ITicketProps';
import { CARRIERS_LOGO_CDN_URL } from 'app/constants/carrierLogoCdnUrl';
import { getLocalizedPrice } from 'shared/getLocalizedPrice';

function getCarrierLogoUrl(carrierIataCode: string): string {
  return CARRIERS_LOGO_CDN_URL + carrierIataCode + '.png';
}

export const Ticket: React.FC<ITicketProps> = (props: ITicketProps) => {
  const { ticketCard, header, priceLabel, carrierLogoWrapper } = styles;
  const { price, carrier, segments } = props;

  const ticketClassesString = [ticketCard, props.className].join(' ');
  const carrierLogoUrl = getCarrierLogoUrl(carrier);
  const localizedPrice = getLocalizedPrice(price);

  return (
    <Card className={ticketClassesString}>
      <div className={header}>
        <h3 className={priceLabel}>{localizedPrice}</h3>
        <div className={carrierLogoWrapper}>
          <img src={carrierLogoUrl} alt='Logo of airline' />
        </div>
      </div>
      <ul className={styles.routes}>
        {segments.map((routeSegment, i) => (
          <RouteDetails
            origin={routeSegment.origin}
            destination={routeSegment.destination}
            date={routeSegment.date}
            duration={routeSegment.duration}
            stops={routeSegment.stops}
            key={i}
          ></RouteDetails>
        ))}
      </ul>
    </Card>
  );
};

import React from 'react';
import styles from './ticket.module.scss';

import { Card } from 'ui-elements/components/card/Card';
import { RouteDetails } from '../route-details/RouteDetails';
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

    const { origin, destination } = segments[0];
    const [routeTo, routeFrom] = segments;

    return (
        <Card className={ticketClassesString}>
            <div className={header}>
                <h3 className={priceLabel}>{localizedPrice}</h3>
                <div className={carrierLogoWrapper}>
                    <img src={carrierLogoUrl} alt='Logo of airline' />
                </div>
            </div>
            <ul className={styles.routes}>
                <RouteDetails
                    origin={origin}
                    destination={destination}
                    date={routeTo.date}
                    duration={routeTo.duration}
                    stops={routeTo.stops}
                ></RouteDetails>
                <RouteDetails
                    origin={destination}
                    destination={origin}
                    date={routeFrom.date}
                    duration={routeFrom.duration}
                    stops={routeFrom.stops}
                ></RouteDetails>
            </ul>
        </Card>
    );
};

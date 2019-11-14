import React from 'react';
import carrierLogo from 'assets/images/carrier-logo.png';
import styles from './ticket.module.scss';
import { Card } from 'ui-elements/components/card/Card';
import { RouteDetails } from '../route-details/RouteDetails';

export const Ticket: React.FC = () => {
  const { ticketCard, header, priceLabel, carrierLogoWrapper } = styles;

  return (
    <Card className={ticketCard}>
      <div className={header}>
        <h3 className={priceLabel}>13 400 P</h3>
        <div className={carrierLogoWrapper}>
          <img src={carrierLogo} alt='Logo of airline' />
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

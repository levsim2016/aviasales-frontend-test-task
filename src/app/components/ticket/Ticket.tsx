import React from 'react';
import carrierLogo from 'assets/images/carrier-logo.png';
import styles from './ticket.module.scss';
import Card from 'ui-elements/components/card/Card';

const Ticket: React.FC = () => {
  return (
    <Card className={styles.ticketCard}>
      <div className={styles.header}>
        <h3 className={styles.priceLabel}>13 400 P</h3>
        <div className={styles.carrierLogoWrapper}>
          <img src={carrierLogo} alt='Logo of airline' />
        </div>
      </div>
    </Card>
  );
};

export default Ticket;

import React from 'react';
import logoImage from 'assets/images/logo.svg';
import styles from './logo.module.scss';

export const Logo: React.FC = () => {
    return (
        <img className={styles.logo} src={logoImage} alt='Logo of Aviasales' />
    );
};

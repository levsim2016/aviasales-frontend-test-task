import React from 'react';
import styles from './header.module.scss';
import Logo from '../logo/Logo';

const Header: React.FC = () => {
  return (
    <header className={styles['header-layout']}>
      <div className={styles['logo-wrapper']}>
        <Logo></Logo>
      </div>
    </header>
  );
};

export default Header;

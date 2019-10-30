import React from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/Header';

const AppLayout: React.FC = () => {
  return (
    <div className={styles['app-layout']}>
      <Header></Header>
    </div>
  );
};

export default AppLayout;

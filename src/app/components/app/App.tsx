import React from 'react';
import styles from './app.module.scss';
import Logo from '../logo/Logo';

const App: React.FC = () => {
  return (
    <div className={styles['app-layout-container']}>
      <Logo />
    </div>
  );
}

export default App;

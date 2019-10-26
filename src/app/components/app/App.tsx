import React from 'react';
import styles from './app.module.scss';
import AppLayout from '../app-layout/AppLayout';

const App: React.FC = () => {
  return (
    <div className={styles['app-layout-container']}>
      <AppLayout></AppLayout>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/Header';
import Checkbox from 'ui-elements/components/checkbox/Checkbox';

const AppLayout: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles['app-layout']}>
      <Header></Header>
      <Checkbox label="Hmm..." checked={checked} checkHandler={isChecked => setChecked(isChecked)}></Checkbox>
    </div>
  );
}

export default AppLayout;
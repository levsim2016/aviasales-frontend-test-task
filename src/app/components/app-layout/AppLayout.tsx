import React, { useState } from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/Header';
import Checkbox from 'ui-elements/components/checkbox/Checkbox';
import Card from 'ui-elements/components/card/Card';

const AppLayout: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles['app-layout']}>
      <Header></Header>
      <Checkbox label="Hmm..." checked={checked} checkHandler={isChecked => setChecked(isChecked)}></Checkbox>
      <Card>
        Hello!
      </Card>
    </div>
  );
}

export default AppLayout;
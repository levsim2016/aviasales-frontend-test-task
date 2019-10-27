import React from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/Header';
import Checkbox from 'ui-elements/components/checkbox/Checkbox';

const AppLayout: React.FC = () => {
  return (
    <div className={styles['app-layout']}>
      <Header></Header>
      <Checkbox label="Hmm..." checked={true}></Checkbox>
      <Checkbox label="1" checked={false}></Checkbox>
      <Checkbox label="2" checked={true}></Checkbox>
      <Checkbox label="3" checked={false}></Checkbox>
    </div>
  );
}

export default AppLayout;
import React, { useState } from 'react';
import styles from './app-layout.module.scss';
import Header from '../header/Header';
import Checkbox from 'ui-elements/components/checkbox/Checkbox';
import Card from 'ui-elements/components/card/Card';
import TabSwitcher from 'ui-elements/components/tab-switcher/TabSwitcher';
import TabItem from 'ui-elements/components/tab-item/TabItem';

const AppLayout: React.FC = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles['app-layout']}>
      <Header></Header>
      <Checkbox
        label='Hmm...'
        disabled={false}
        selected={selected}
        selectHandler={isSelected => setSelected(isSelected)}
      ></Checkbox>
      <Card className={styles['panel']}>Hello!</Card>
      <TabSwitcher>
        <TabItem
          id='ggg'
          label='Самый дешевый'
          selected={true}
          selectHandler={tabId => console.log(tabId)}
        />
        <TabItem
          id='555'
          label='Самый быстрый'
          selectHandler={tabId => console.log(tabId)}
        />
      </TabSwitcher>
    </div>
  );
};

export default AppLayout;

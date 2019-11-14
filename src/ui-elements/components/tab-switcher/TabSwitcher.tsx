import React from 'react';
import styles from './tab-switcher.module.scss';
import { ITabSwitcherProps } from 'ui-elements/interfaces/ITabSwitcherProps';

export const TabSwitcher: React.FC<ITabSwitcherProps> = (
  props: ITabSwitcherProps
) => {
  const { children: tabs } = props;

  if (tabs === undefined) {
    return <div className={styles.tabSwitcher}></div>;
  }
  return <div className={styles.tabSwitcher}>{tabs}</div>;
};

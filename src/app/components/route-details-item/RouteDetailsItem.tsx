import React from 'react';
import styles from './route-details-item.module.scss';
import { IRouteDetailsItemProps } from 'app/interfaces/IRouteDetailsItemProps';

export const RouteDetailsItem: React.FC<IRouteDetailsItemProps> = (
  props: IRouteDetailsItemProps
) => {
  const { label, value } = props;

  return (
    <div className={styles.layout}>
      <span className={styles.label}>{label}</span>
      <span className={styles.detailValue}>{value}</span>
    </div>
  );
};

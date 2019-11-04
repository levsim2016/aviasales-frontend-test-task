import React from 'react';
import styles from './route-details.module.scss';
import IRouteDetailsProps from 'app/interfaces/IRouteDetailsProps';
import RouteDetailsItem from '../route-details-item/RouteDetailsItem';

const RouteDetails: React.FC<IRouteDetailsProps> = (
  props: IRouteDetailsProps
) => {
  const { origin, destination, date, stops, duration } = props;

  return (
    <li className={styles.flightOptions}>
      <RouteDetailsItem
        label={`${origin} - ${destination}`}
        value={new Date().toDateString()}
      ></RouteDetailsItem>
      <RouteDetailsItem label='В пути' value='21ч 15м'></RouteDetailsItem>
      <RouteDetailsItem
        label={`${stops.length} пересадок`}
        value={stops.join(', ')}
      ></RouteDetailsItem>
    </li>
  );
};

export default RouteDetails;

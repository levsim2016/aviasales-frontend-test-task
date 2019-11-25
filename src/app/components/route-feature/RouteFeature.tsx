import React from 'react';
import styles from './route-feature.module.scss';
import { IRouteFeatureProps } from 'app/interfaces/IRouteFeatureProps';

export const RouteFeature: React.FC<IRouteFeatureProps> = (
    props: IRouteFeatureProps
) => {
    const { label, value } = props;

    return (
        <div className={styles.layout}>
            <span className={styles.label}>{label}</span>
            <span className={styles.detailValue}>{value}</span>
        </div>
    );
};

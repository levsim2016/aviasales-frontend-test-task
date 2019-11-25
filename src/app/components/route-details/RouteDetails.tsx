import React from 'react';
import styles from './route-details.module.scss';
import { IRouteDetailsProps } from 'app/interfaces/IRouteDetailsProps';
import { RouteFeature } from '../route-feature/RouteFeature';
import { getPluralAmount } from 'shared/getPluralizedAmount';

function getFormattedRouteDuration(duration: number): string {
    const date = new Date(0);
    date.setMinutes(duration);

    const formatOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'UTC',
    };
    const timePartPostfixes = ['д', 'ч', 'м'];

    return new Intl.DateTimeFormat('ru', formatOptions)
        .formatToParts(date)
        .filter(part => part.type !== 'literal')
        .map(part => {
            if (part.type === 'day') {
                return {
                    type: 'day',
                    value: Number(part.value) - 1,
                };
            }
            return part;
        })
        .map((part, i) => {
            if (Number(part.value) > 0) {
                return Number(part.value) + timePartPostfixes[i];
            }
            return '';
        })
        .join(' ')
        .trim();
}

function getRouteTimeFrame(
    departureDate: Date,
    durationInMinutes: number
): string {
    const arrivalDate = new Date(departureDate);
    arrivalDate.setMinutes(departureDate.getMinutes() + durationInMinutes);

    const departureTime = departureDate.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const arrivalTime = arrivalDate.toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return `${departureTime} - ${arrivalTime}`;
}

export const RouteDetails: React.FC<IRouteDetailsProps> = (
    props: IRouteDetailsProps
) => {
    const { origin, destination, date, duration, stops } = props;

    const routeCities = [origin, destination].join(' - ');
    const delimitedStops = stops.join(', ');

    const stopsPluralForms = ['остановка', 'остановки', 'остановок'];
    const stopsAmountLabel = `${stops.length} ${getPluralAmount(
        stops.length,
        stopsPluralForms
    )}`;

    return (
        <li className={styles.flightOptions}>
            <RouteFeature
                label={routeCities}
                value={getRouteTimeFrame(date, duration)}
            ></RouteFeature>

            <RouteFeature
                label='В пути'
                value={getFormattedRouteDuration(duration)}
            ></RouteFeature>

            {stops.length > 0 && (
                <RouteFeature
                    label={stopsAmountLabel}
                    value={delimitedStops}
                ></RouteFeature>
            )}
        </li>
    );
};

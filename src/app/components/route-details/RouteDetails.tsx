import React from 'react';
import styles from './route-details.module.scss';
import { IRouteDetailsProps } from 'app/interfaces/IRouteDetailsProps';
import { RouteDetailsItem } from '../route-details-item/RouteDetailsItem';
import { getDelimitedText } from 'shared/getDelimitedString';

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

function getFormattedStopsLabel(stopsAmount: number): string {
    let labelPostfix = '';
    switch (stopsAmount) {
        case 1:
            labelPostfix = 'пересадка';
            break;
        case 2:
            labelPostfix = 'пересадки';
            break;
        case 3:
            labelPostfix = 'пересадки';
            break;
        case 4:
            labelPostfix = 'пересадки';
            break;
        default:
            labelPostfix = 'пересадок';
    }

    return `${stopsAmount} ${labelPostfix}`;
}

function getRouteTimeFrameLabel(origin: string, destination: string): string {
    return origin + ' - ' + destination;
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

    return (
        <li className={styles.flightOptions}>
            <RouteDetailsItem
                label={getRouteTimeFrameLabel(origin, destination)}
                value={getRouteTimeFrame(date, duration)}
            ></RouteDetailsItem>

            <RouteDetailsItem
                label='В пути'
                value={getFormattedRouteDuration(duration)}
            ></RouteDetailsItem>

            {stops.length > 0 && (
                <RouteDetailsItem
                    label={getFormattedStopsLabel(stops.length)}
                    value={getDelimitedText(stops)}
                ></RouteDetailsItem>
            )}
        </li>
    );
};

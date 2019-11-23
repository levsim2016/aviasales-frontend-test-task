import React from 'react';
import styles from './tab-item.module.scss';
import { ITabItemProps } from 'ui-elements/interfaces/ITabItemProps';

function getTabClasses(tabProps: ITabItemProps): string {
    if (tabProps.selected === true) {
        return `${styles.tabItem} ${styles.selected}`;
    }

    return styles.tabItem;
}

export const TabItem: React.FC<ITabItemProps> = (props: ITabItemProps) => {
    const { id } = props;

    return (
        <div
            className={getTabClasses(props)}
            onClick={() => props.selectHandler(id)}
        >
            {props.label}
        </div>
    );
};

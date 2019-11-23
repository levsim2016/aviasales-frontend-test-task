import React from 'react';
import styles from './transfers-filter-panel.module.scss';
import { Card } from 'ui-elements/components/card/Card';
import { Checkbox } from 'ui-elements/components/checkbox/Checkbox';

export const TransfersFilterPanel: React.FC = () => {
    return (
        <Card className={styles.panelLayout}>
            <h4 className={styles.title}>Количество пересадок</h4>
            <div className={styles.filterCheckboxes}>
                <Checkbox
                    label='Все'
                    selected={false}
                    selectHandler={isSelected => console.log(isSelected)}
                ></Checkbox>
                <Checkbox
                    label='Без пересадок'
                    selected={true}
                    selectHandler={isSelected => console.log(isSelected)}
                ></Checkbox>
                <Checkbox
                    label='1 пересадка'
                    selected={true}
                    selectHandler={isSelected => console.log(isSelected)}
                ></Checkbox>
                <Checkbox
                    label='2 пересадки'
                    selected={true}
                    selectHandler={isSelected => console.log(isSelected)}
                ></Checkbox>
                <Checkbox
                    label='3 пересадки'
                    selected={false}
                    selectHandler={isSelected => console.log(isSelected)}
                ></Checkbox>
            </div>
        </Card>
    );
};

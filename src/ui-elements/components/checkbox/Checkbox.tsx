import React, { useCallback, MouseEvent } from 'react';
import styles from './checkbox.module.scss';
import CheckboxMarker from '../checkbox-marker/CheckboxMarker';
import ICheckboxProps from 'ui-elements/interfaces/ICheckboxProps';

const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
  const { label, checked, checkHandler } = props;

  const clickHandler = useCallback((event: MouseEvent) => {
    checkHandler(!checked);
  }, [checked, checkHandler]);

  return (
    <div className={styles.layout} onClick={clickHandler}>
      <CheckboxMarker checked={checked}></CheckboxMarker>
      <span>
        {label}
      </span>
    </div>
  );
}

export default Checkbox;
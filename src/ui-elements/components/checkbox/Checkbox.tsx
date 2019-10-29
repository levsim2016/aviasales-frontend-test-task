import React, { useCallback, MouseEvent } from 'react';
import styles from './checkbox.module.scss';
import CheckboxMarker from '../checkbox-marker/CheckboxMarker';
import CheckboxProps from 'ui-elements/interfaces/CheckboxProps';

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
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
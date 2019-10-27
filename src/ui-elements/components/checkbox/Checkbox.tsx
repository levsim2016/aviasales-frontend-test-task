import React from 'react';
import styles from './checkbox.module.scss';
import CheckboxMarker from '../checkbox-marker/CheckboxMarker';
import CheckboxProps from 'ui-elements/interfaces/CheckboxProps';

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { label, checked } = props;
  return (
    <div className={styles.layout}>
      <CheckboxMarker checked={checked}></CheckboxMarker>
      <span>
        {label}
      </span>
    </div>
  );
}

export default Checkbox;
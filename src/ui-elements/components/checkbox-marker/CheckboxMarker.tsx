import React from 'react';
import styles from './checkbox-marker.module.scss';
import ICheckboxMarkerProps from 'ui-elements/interfaces/ICheckboxMarkerProps';

function getCheckboxMarkerClasses(isSelected: boolean): string {
  if (isSelected === true) {
    return `${styles['check-marker']} ${styles.selected}`;
  }
  return styles['check-marker'];
}

const CheckboxMarker: React.FC<ICheckboxMarkerProps> = (props: ICheckboxMarkerProps) => {
  const markerClasses = getCheckboxMarkerClasses(props.selected);
  return (
    <div className={markerClasses}>
      <svg
        className={styles['checkbox-marker-image']}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" />
      </svg>
    </div>
  );
}

export default CheckboxMarker;
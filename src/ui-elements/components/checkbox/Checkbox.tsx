import React, { useCallback, MouseEvent } from "react";
import styles from "./checkbox.module.scss";
import CheckboxMarker from "../checkbox-marker/CheckboxMarker";
import ICheckboxProps from "ui-elements/interfaces/ICheckboxProps";

const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
  const { label, selected, selectHandler } = props;

  const clickHandler = useCallback(
    (event: MouseEvent) => {
      selectHandler(!selected);
    },
    [selected, selectHandler]
  );

  return (
    <div className={styles.layout} onClick={clickHandler}>
      <CheckboxMarker selected={selected}></CheckboxMarker>
      <span>{label}</span>
    </div>
  );
};

export default Checkbox;

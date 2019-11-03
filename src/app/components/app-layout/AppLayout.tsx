import React, { useState } from "react";
import styles from "./app-layout.module.scss";
import Header from "../header/Header";
import Checkbox from "ui-elements/components/checkbox/Checkbox";
import Card from "ui-elements/components/card/Card";

const AppLayout: React.FC = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles["app-layout"]}>
      <Header></Header>
      <Checkbox
        label="Hmm..."
        disabled={false}
        selected={selected}
        selectHandler={isSelected => setSelected(isSelected)}
      ></Checkbox>
      <Card>Hello!</Card>
    </div>
  );
};

export default AppLayout;

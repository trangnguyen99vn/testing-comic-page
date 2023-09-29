import React from "react";

import { TitleProps } from "./types";
import styles from "./styles.module.css";

function Title({ text }: TitleProps) {
  return <div className={styles.label_section}>{text}</div>;
}

export default Title;

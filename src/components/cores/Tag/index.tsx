import React from "react";
import { TagProps } from "./types";
import styles from "./styles.module.css";

function Tag({ text }: TagProps) {
  return <div className={styles.container}>{text}</div>;
}

export default Tag;

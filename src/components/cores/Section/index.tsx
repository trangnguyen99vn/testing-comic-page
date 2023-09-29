import React from "react";

import { Title } from "src/components";
import { SectionProps } from "./types";
import styles from "./styles.module.css";

function Section({ children, title }: SectionProps) {
  return (
    <div className={styles.section_container}>
      {title && <Title text={title} />}
      {children}
    </div>
  );
}

export default Section;

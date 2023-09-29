import React from "react";

import { RelatedItem } from "..";
import { RelatedTitlesProps } from "./types";
import styles from "./styles.module.css";

const RelatedTitles = (props: RelatedTitlesProps) => {
  return (
    <div className={styles.related_title_wrapper}>
      <RelatedItem
        name="Title Name 1"
        author="PREQUEL"
        reads="45.6K"
        url="/images/title.jpg"
      />
      <div className={styles.line} />
      <RelatedItem
        name="Title Name 2"
        author="PREQUEL"
        reads="45.6K"
        url="/images/title.jpg"
      />
      <div className={styles.line} />
      <RelatedItem
        name="Title Name 3"
        author="PREQUEL"
        reads="45.6K"
        url="/images/title.jpg"
      />
      <div className={styles.line} />
    </div>
  );
};

export default RelatedTitles;

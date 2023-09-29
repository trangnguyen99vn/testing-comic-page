import React from "react";

import { SummaryDetailsProps } from "./types";
import styles from "./styles.module.css";
import { Row, Col } from "antd";
import { SummaryImages, SummaryInformation } from "src/components";

const LIST_IMAGE = [
  { name: "summary-1", url: "/images/summary-1.jpg" },
  { name: "summary-2", url: "/images/summary-2.jpg" },
  { name: "summary-3", url: "/images/summary-3.jpg" },
  { name: "summary-4", url: "/images/summary-4.jpg" },
  { name: "summary-4", url: "/images/summary-4.jpg" },
];

const SummaryDetails = ({}: SummaryDetailsProps) => {
  return (
    <div className={styles.summary_details_wrapper}>
      <SummaryImages list={LIST_IMAGE} />
      <SummaryInformation />
    </div>
  );
};

export default SummaryDetails;

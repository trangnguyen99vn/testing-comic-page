import React from "react";
import { SummaryImageProps } from "./types";
import styles from "./styles.module.css";
import { Row, Col } from "antd";
import { CustomImage } from "src/components";

const SummaryImages = ({ list }: SummaryImageProps) => {
  if (list.length === 0) return null;

  return (
    <Row
      gutter={8}
      justify="space-between"
      className={styles.summary_list_images}
    >
      {list.map((i) => {
        return (
          <Col key={i.name}>
            <CustomImage url={i.url} alt={i.name} width={84} height={126} />
          </Col>
        );
      })}
    </Row>
  );
};

export default SummaryImages;

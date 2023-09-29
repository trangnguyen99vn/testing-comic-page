import React from "react";
import { Row, Col, Typography } from "antd";

import { CustomImage, Icon } from "src/components";
import styles from "./styles.module.css";
import { RelatedItemProps } from "./types";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const { Text } = Typography;

const RelatedItem = ({ url, author, reads, name }: RelatedItemProps) => {
  return (
    <Row gutter={24} align="middle" className={styles.related_item_container}>
      <Col>
        <CustomImage url={url} width={80} height={120} alt={name} />
      </Col>
      <Col>
        <Row>
          <Text
            style={{
              color: LIST_COLOR.COLOR_3,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
            }}
          >
            {name}
          </Text>
        </Row>
        <Row align="middle">
          <Icon icon="currency" border={false} />
          &nbsp;
          <Text
            style={{
              color: LIST_COLOR.COLOR_INKR_PURPLE_6,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
              fontWeight: "500",
            }}
          >
            EXCLUSIVE
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
            }}
          >
            {author}
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
            }}
          >
            {reads} reads
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export default RelatedItem;

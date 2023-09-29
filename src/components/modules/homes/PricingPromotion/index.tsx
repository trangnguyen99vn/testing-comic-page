import { Row, Col, Typography } from "antd";
import React from "react";

import { DotInline, Icon } from "src/components";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

import styles from "./styles.module.css";
import {} from "./types";

const { Text } = Typography;
const PricingPromotion = () => {
  const renderRow1 = () => {
    return (
      <Row
        justify="space-between"
        className={`${styles.pricing_promotion_row1} ${styles.pricing_promotion_row}`}
      >
        <Col className={styles.pricing_promotion_col} span={12}>
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_1,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              FREE
            </Text>
          </Row>
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
              }}
            >
              3 Chapters
            </Text>
          </Row>
        </Col>
        <Col
          className={`${styles.pricing_promotion_col} ${styles.pricing_promotion_col_right}`}
          span={12}
        >
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_1,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              LOCKED
            </Text>
          </Row>
          <Row align="middle">
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
              }}
            >
              7 Chapters&nbsp;
            </Text>
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>(&nbsp;</span>
              <Icon icon="union" border={false} /> <span>&nbsp;5/chapter)</span>
            </Text>
          </Row>
        </Col>
      </Row>
    );
  };

  const renderRow2 = () => {
    return (
      <Row
        className={`${styles.pricing_promotion_row}`}
        align="middle"
        justify="space-between"
      >
        <Col className={styles.pricing_promotion_col} span={12}>
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              Total Price
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
              Instant access to all chapters <DotInline /> No ad
            </Text>
          </Row>
        </Col>
        <Col className={styles.pricing_promotion_col} span={5}>
          <Row justify="end">
            <div
              className={`${styles.pricing_promotion_unit} ${styles.pricing_promotion_currency}`}
            >
              <Icon icon="union" border={false} />
              <span>35</span>
            </div>
          </Row>
        </Col>
      </Row>
    );
  };

  const renderRow3 = () => {
    return (
      <Row
        className={`${styles.pricing_promotion_row3} ${styles.pricing_promotion_row}`}
        align="middle"
        justify="space-between"
      >
        <Col className={styles.pricing_promotion_col} span={12}>
          <Row align="middle">
            <Text
              style={{
                color: LIST_COLOR.COLOR_INKR_PURPLE,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Save money with INKR Extra &nbsp;</span>
              <Icon border={false} icon="currency" />
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
              Instant access to all chapters <DotInline /> No ad <DotInline />{" "}
              Extra saving
            </Text>
          </Row>
        </Col>
        <Col className={styles.pricing_promotion_col} span={12}>
          <Row justify="end">
            <div
              className={`${styles.pricing_promotion_unit} ${styles.pricing_promotion_discount}`}
            >
              <Text
                style={{
                  color: LIST_COLOR.COLOR_3,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_20,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_28,
                }}
              >
                -50%
              </Text>
            </div>
            <div
              className={`${styles.pricing_promotion_unit} ${styles.pricing_promotion_currency_discount}`}
            >
              <Icon icon="union" border={false} />
              &nbsp;
              <Text
                style={{
                  color: LIST_COLOR.COLOR_4,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_20,
                  textDecorationLine: "line-through",
                }}
              >
                35
              </Text>
              &nbsp;
              <Text
                style={{
                  color: LIST_COLOR.COLOR_3,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
                }}
              >
                18
              </Text>
            </div>
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.pricing_promotion_container}>
      {renderRow1()}
      {renderRow2()}
      {renderRow3()}

      <Row className={styles.pricing_promotion_bottom_text}>
        <Col span={24}>
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            Want to read for free? Learn more
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default PricingPromotion;

import React, { useState } from "react";
import { Row, Col, Typography, Button } from "antd";
import { CustomButton, Tag, SummaryDetails } from "src/components";

import { DescriptionAboutProps } from "./types";
import styles from "./styles.module.css";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
  SUMMARY_DEFAULT,
} from "src/utils/constants";

const { Paragraph, Text } = Typography;

const DescriptionAbout = ({}: DescriptionAboutProps) => {
  const [isShowmore, setIsShowmore] = useState<boolean>(false);

  const renderCollapseContent = () => {
    if (isShowmore) return <SummaryDetails />;
    return (
      <Row className={styles.about_showmore}>
        <Col
          span={24}
          style={{ textAlign: "center" }}
          onClick={() => {
            setIsShowmore(true);
          }}
        >
          <Button
            style={{
              padding: "5px 16px",
              background: "unset",
            }}
          >
            <Text
              style={{
                color: LIST_COLOR.COLOR_2,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              Show more
            </Text>
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.about_wrapper}>
      <Row>
        <Paragraph
          style={{
            marginBottom: 8,
            color: LIST_COLOR.COLOR_3,
            fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
            lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
          }}
        >
          Genres
        </Paragraph>
      </Row>
      <Row className={styles.about_tags}>
        <Tag text="Horror" />
        <Tag text="Psychological" />
        <Tag text="Seinen" />
      </Row>
      <Row>
        <Paragraph
          style={{
            marginBottom: 9,
            color: LIST_COLOR.COLOR_3,
            fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
            lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
          }}
        >
          Summary
        </Paragraph>
      </Row>
      <Row>
        <Col>
          <Paragraph
            ellipsis={isShowmore ? false : { rows: 4 }}
            style={{
              margin: 0,
              color: LIST_COLOR.COLOR_2,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            {SUMMARY_DEFAULT}
          </Paragraph>
        </Col>
      </Row>
      {renderCollapseContent()}
    </div>
  );
};

export default DescriptionAbout;

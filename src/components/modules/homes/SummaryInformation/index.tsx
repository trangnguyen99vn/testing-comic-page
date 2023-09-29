import React from "react";
import { Row, Col, Typography } from "antd";

import { CopyrightOutlined } from "@ant-design/icons";

import { SummaryInformationProps, OtherFactsKeys } from "./types";
import { CommentAvatar } from "src/components";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const { Paragraph, Text } = Typography;

const LIST_CREDIT = [
  { name: "Kodansha", role: "Publisher", avatar: "/images/summary-info-1.jpg" },
  {
    name: "Jonie Christmas",
    role: "Story",
    avatar: "/images/summary-info-2.jpg",
  },
  { name: "Jack T. Cole", role: "Art", avatar: "/images/summary-info-3.jpg" },
];

const LIST_KEY_FACT: OtherFactsKeys = {
  updated: "Last updated",
  rating: "Age rating",
  color: "Color",
  media: "Origin Media",
  style: "Style Origin",
  copyright: "Copyright",
  otherName: "Other Names",
};

const FACT_INFO: OtherFactsKeys = {
  updated: "2 days ago",
  rating: "Mature (18+)",
  color: "Black & White",
  media: "print",
  style: "Japanese Comics (Manga)",
  copyright: "Daruma Matsuura / Kodansha Ltd.",
  otherName: "Kasane-voleuse de visage",
};

const SummaryInformation = ({}: SummaryInformationProps) => {
  const renderListCredits = () => {
    return LIST_CREDIT.map((item, index) => {
      return (
        <Row
          key={index}
          align="middle"
          gutter={10}
          style={{ marginBottom: 14 }}
        >
          <Col>
            <CommentAvatar
              avatar={item.avatar}
              name={item.name}
              width={40}
              height={40}
            />
          </Col>
          <Col>
            <Row>
              <Text
                style={{
                  color: LIST_COLOR.COLOR_3,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
                }}
              >
                {item.name}
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  color: LIST_COLOR.COLOR_1,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_20,
                }}
              >
                {item.role}
              </Text>
            </Row>
          </Col>
        </Row>
      );
    });
  };

  const renderOtherFact = () => {
    return Object.keys(LIST_KEY_FACT).map((k) => {
      return (
        <Row key={k} style={{ marginBottom: 4 }}>
          <Col flex="90px">
            <Text
              style={{
                color: LIST_COLOR.COLOR_1,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              {LIST_KEY_FACT[k]}
            </Text>
          </Col>
          <Col flex="10px">
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              :
            </Text>
          </Col>
          <Col>
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              {FACT_INFO[k]}
            </Text>
          </Col>
        </Row>
      );
    });
  };

  return (
    <div>
      <Paragraph
        style={{
          marginBottom: 8,
          color: LIST_COLOR.COLOR_3,
          fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
          lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
        }}
      >
        Credits
      </Paragraph>
      {renderListCredits()}
      <Paragraph
        style={{
          margin: "18px 0 4 0",
          color: LIST_COLOR.COLOR_3,
          fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
          lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
        }}
      >
        Other Facts <CopyrightOutlined />
      </Paragraph>
      {renderOtherFact()}
    </div>
  );
};

export default SummaryInformation;

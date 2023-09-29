import React from "react";
import { Row, Col, Typography } from "antd";
import { DotInline, Icon, CommentAvatar } from "src/components";

import { CommentContentProps } from "./types";
import styles from "./styles.module.css";
import {
  COMMENT_DEFAULT,
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const { Text } = Typography;

const CommentContent = ({
  userAvatar,
  userName,
  timeAgo,
  content,
  likes,
  shares,
  chapter,
}: CommentContentProps) => {
  return (
    <Row
      wrap={false}
      align="top"
      justify="start"
      gutter={16}
      className={styles.comment_content_wrapper}
    >
      <Col flex="none">
        <CommentAvatar avatar={userAvatar} name={userName} />
      </Col>
      <Col flex="auto">
        <Row gutter={8} style={{ marginBottom: 4 }}>
          <Col>
            <Text
              style={{
                color: LIST_COLOR.COLOR_1,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_18,
              }}
            >
              {userName}
            </Text>
          </Col>
          <Col>
            <Text
              style={{
                color: LIST_COLOR.COLOR_NEUTRAL_5,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_11,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_18,
              }}
            >
              Commented on {chapter} <DotInline /> {timeAgo} ago
            </Text>
          </Col>
        </Row>
        <Row style={{ marginBottom: 4 }}>
          <Text
            style={{
              color: LIST_COLOR.COLOR_3,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            {COMMENT_DEFAULT}
          </Text>
        </Row>
        <Row align="middle">
          <Icon icon="like" color={LIST_COLOR.COLOR_3} />
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              margin: "0 10px 0 8px",
            }}
          >
            {likes}
          </Text>
          <Icon icon="message" color={LIST_COLOR.COLOR_3} />
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              margin: "0 10px 0 8px",
            }}
          >
            {shares}
          </Text>
          <Text
            style={{
              color: LIST_COLOR.COLOR_1,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            Reply
          </Text>
        </Row>
      </Col>
    </Row>
  );
};

export default CommentContent;

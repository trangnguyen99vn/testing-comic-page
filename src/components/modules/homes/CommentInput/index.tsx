import React from "react";
import { Row, Col, Input } from "antd";

import { CommentInputProps } from "./types";
import styles from "./styles.module.css";
import { CommentAvatar, CustomButton } from "src/components";
import { LIST_COLOR, LIST_FONT_SIZE } from "src/utils/constants";

const CommentInput = ({ userAvatar, userName }: CommentInputProps) => {
  return (
    <Row
      wrap={false}
      align="top"
      justify="start"
      gutter={16}
      className={styles.comment_input_wrapper}
    >
      <Col flex="none">
        <CommentAvatar avatar={userAvatar} name={userName} />
      </Col>
      <Col>
        <Row>
          <Input
            className={styles.comment_input_field}
            placeholder="Add your comment"
            style={{
              borderColor: LIST_COLOR.COLOR_NEUTRAL_5,
              backgroundColor: "unset",
              borderRadius: "8px",
              width: 290,
              height: 32,
              color: LIST_COLOR.COLOR_3,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
            }}
          />
        </Row>
        <Row className={styles.comment_add_button}>
          <CustomButton text="Add Comment" icon="send" />
        </Row>
      </Col>
    </Row>
  );
};

export default CommentInput;

import React from "react";
import { Button, Row, Col, Typography } from "antd";

import { Icon } from "src/components";

import { CustomButtonProps } from "./types";
import styles from "./styles.module.css";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const { Text } = Typography;

function CustomButton({ text, icon, bgColor }: CustomButtonProps) {
  return (
    <Button
      className={styles.custom_btn}
      style={{ backgroundColor: bgColor || LIST_COLOR.COLOR_PRIMARY_6 }}
    >
      <Row align="middle" gutter={8}>
        {icon && (
          <Col>
            <Icon icon={icon} color={LIST_COLOR.COLOR_PRIMARY_INVERSE} />
          </Col>
        )}
        <Col>
          <Text
            style={{
              color: LIST_COLOR.COLOR_PRIMARY_INVERSE,
              fontWeight: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            {text}
          </Text>
        </Col>
      </Row>
    </Button>
  );
}

export default CustomButton;

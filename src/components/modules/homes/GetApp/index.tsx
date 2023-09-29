import React from "react";
import { Row, Col, Typography } from "antd";
import Image from "next/image";

import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";
import { GetAppProps } from "./types";

const { Text } = Typography;

function GetApp({}: GetAppProps) {
  return (
    <Row align="middle" justify="space-between">
      <Col span={16}>
        <Row>
          <Text
            style={{
              color: LIST_COLOR.COLOR_3,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_16,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_24,
              marginBottom: 4,
            }}
          >
            Get The App
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              color: LIST_COLOR.COLOR_3,
              fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
              lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
            }}
          >
            Love this title? Scan the QR code to continue reading right on your
            mobile devices.
          </Text>
        </Row>
      </Col>
      <Col span={8}>
        <Row justify="end">
          <Image
            src="/images/qrcode.jpg"
            width={116}
            height={116}
            alt="qrcode"
          ></Image>
        </Row>
      </Col>
    </Row>
  );
}

export default GetApp;

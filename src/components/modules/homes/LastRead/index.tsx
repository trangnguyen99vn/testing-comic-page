import React from "react";
import { Row, Col, Typography } from "antd";

import { Chapter, Icon } from "src/components";
import {
  IMAGE_PATH,
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

import { LastReadProps } from "./types";
import styles from "./styles.module.css";

const { Text } = Typography;

function LastRead(props: LastReadProps) {
  return (
    <div className={styles.last_read_container}>
      <Chapter
        title="Chapter 1"
        lastRead="2 days ago"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        isReading={true}
        progress={70}
      />

      <Row align="middle" className={styles.last_read_list_chapter}>
        <Col span={12}>
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_3,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_20,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_28,
              }}
            >
              10 Chapters
            </Text>
          </Row>
          <Row>
            <Text
              style={{
                color: LIST_COLOR.COLOR_2,
                fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
              }}
            >
              New chapter every Thursday
            </Text>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Col>
              <Icon icon="belt" color={LIST_COLOR.COLOR_3} border={true} />
            </Col>
            <Col>
              <Icon
                icon="sort-asc"
                style={{ marginLeft: "8px" }}
                color={LIST_COLOR.COLOR_3}
                border={true}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Chapter
        title="Chapter 1"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        isReading
        progress={70}
      />
      <Chapter title="Chapter 2" src={`${IMAGE_PATH}/image-chapter.jpg`} />
      <Chapter title="Chapter 3" src={`${IMAGE_PATH}/image-chapter.jpg`} />
      <Chapter
        title="Chapter 4"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 5"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 6"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 7"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 8"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 9"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
      <Chapter
        title="Chapter 10"
        src={`${IMAGE_PATH}/image-chapter.jpg`}
        paid={false}
        price={5}
      />
    </div>
  );
}

export default LastRead;

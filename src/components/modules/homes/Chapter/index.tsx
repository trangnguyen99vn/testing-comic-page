import React from "react";
import { Row, Col, Typography } from "antd";
import { Icon, ImageThumbnail } from "src/components";

import { ChapterProps } from "./types";
import styles from "./styles.module.css";
import {
  LIST_COLOR,
  LIST_FONT_SIZE,
  LIST_LINE_HEIGHT,
} from "src/utils/constants";

const { Text } = Typography;

function Chapter({
  title,
  src,
  lastRead,
  price,
  isReading = false,
  progress,
}: ChapterProps) {
  let customClass = "chapter_container";
  if (lastRead) {
    customClass = "chapter_container_last_read";
  } else if (isReading) {
    customClass = "chapter_container_selected";
  }

  return (
    <div className={styles[customClass]}>
      <Row align="middle">
        <Col span={20}>
          <Row justify="start" align="middle" gutter={12}>
            <Col className={styles.chapter_thumbnail_wrapper}>
              <ImageThumbnail
                url={src}
                alt=""
                width={78}
                height={62}
                progress={progress}
                lock={!!price}
              />
            </Col>
            <Col>
              <Row>
                <Text
                  style={{
                    color: LIST_COLOR.COLOR_2,
                    fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                    lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
                  }}
                >
                  {title}
                </Text>
              </Row>
              {lastRead && (
                <Row>
                  <Text
                    style={{
                      color: LIST_COLOR.COLOR_1,
                      fontSize: LIST_FONT_SIZE.FONT_SIZE_12,
                      lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_20,
                    }}
                  >
                    Last read {lastRead}{" "}
                  </Text>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          {price ? (
            <Row align="middle" justify="end">
              <Icon icon="union" />
              &nbsp;
              <span>{price}</span>
            </Row>
          ) : !lastRead ? (
            <Row justify="end">
              <Text
                style={{
                  color: LIST_COLOR.COLOR_2,
                  fontSize: LIST_FONT_SIZE.FONT_SIZE_14,
                  lineHeight: LIST_LINE_HEIGHT.LINE_HEIGHT_22,
                }}
              >
                FREE
              </Text>
            </Row>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}

export default Chapter;

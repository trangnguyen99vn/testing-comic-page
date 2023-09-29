import React from "react";
import { Row, Col } from "antd";

import { Tag, CustomButton, Icon, DotInline } from "src/components";
import { MainPosterContentProps } from "./types";
import styles from "./styles.module.css";
import { LIST_COLOR } from "src/utils/constants";

function MainPosterContent(props: MainPosterContentProps) {
  return (
    <div className={styles.mainposter_content_container}>
      <div>
        <Row justify="space-between">
          <Col>
            <div className={styles.mainposter_content_title}>Kasane</div>
          </Col>
          <Col>
            <Row justify="space-between" align="middle">
              <Col>
                <Icon
                  icon="share-alt"
                  color={LIST_COLOR.COLOR_3}
                  border={true}
                />
              </Col>
              <Col>
                <Icon
                  icon="more"
                  style={{ marginLeft: "8px" }}
                  color={LIST_COLOR.COLOR_3}
                  border={true}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={styles.mainposter_content_text}>By Kodansa</div>
        <div className={styles.mainposter_content_text}>
          Drama <DotInline /> 10 Chapters
        </div>
        <Row style={{ marginBottom: "25px" }}>
          <div className={styles.mainposter_content_group_info}>
            <Icon icon="read" color={LIST_COLOR.COLOR_1} />
            <span className={styles.mainposter_content_info}>74,483</span>
          </div>
          <div className={styles.mainposter_content_group_info}>
            <Icon icon="like" border={false} color={LIST_COLOR.COLOR_1} />
            <span className={styles.mainposter_content_info}>15,863</span>
          </div>
        </Row>
        <Row>
          <Tag text="18+" />
          <Tag text="New" />
          <Tag text="Trending" />
          <Tag text="Bestseller" />
          <Tag text="manga" />
        </Row>
      </div>
      <div>
        <CustomButton text="Read first Chapter for FREE" />
      </div>
    </div>
  );
}

export default MainPosterContent;

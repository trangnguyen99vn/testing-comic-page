import { Row, Col } from "antd";

import {
  Section,
  GetApp,
  RelatedTitles,
  DescriptionAbout,
} from "src/components";
import { Comments } from "..";

const RightContent = () => {
  return (
    <Col xs={9} xl={8}>
      <Row>
        <Section title="About This">
          <DescriptionAbout />
        </Section>
      </Row>
      <Row>
        <Section title="Related Titles">
          <RelatedTitles />
        </Section>
      </Row>
      <Row>
        <Section title="12 Comments">
          <Comments />
        </Section>
      </Row>
      <Row>
        <Section>
          <GetApp />
        </Section>
      </Row>
    </Col>
  );
};

export default RightContent;

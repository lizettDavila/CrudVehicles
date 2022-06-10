import React from "react";
import { Row, Col } from "antd";
import { CarOutlined } from "@ant-design/icons";

function Information() {
  return (
    <Row justify="center">
      <Col>
        <CarOutlined style={{ fontSize: "10rem" }} />
      </Col>
    </Row>
  );
}

export default Information;

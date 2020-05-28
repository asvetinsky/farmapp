import React from "react";
import { Row, Col, Spin } from "antd";

const Loading = () => {
  return (
    <Row align="middle" justify="center">
      <Col>
        <Spin style={{ textAlign: "center" }} tip="Loading..."></Spin>
      </Col>
    </Row>
  );
};

export default Loading;

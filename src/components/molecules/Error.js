import React from "react";
import { Col, Row, Alert } from "antd";

const Error = ({ description }) => {
  return (
    <Row align="middle" justify="center">
      <Col>
        <Alert
          message="Error fetching recipes"
          description={description}
          type="error"
        />
      </Col>
    </Row>
  );
};

export default Error;

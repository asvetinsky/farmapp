import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Layout } from "antd";
import ContentWrapper from "../atoms/ContentWraper";
import FooterWrapper from "../atoms/FooterWrapper";
import MenuItem from "../molecules/MenuItem";
import Logo from "../molecules/Logo";

const { Header, Footer } = Layout;

const SiteLayout = ({ children }) => {
    const { push } = useHistory();
    const handleGoToMainPage = () => push("/");

  return (
    <Layout>
      <Header>
        <Row justify="space-between">
          <Col>
            <Logo onClick={handleGoToMainPage} />
          </Col>
          <Col>
            <MenuItem text={"Login"} onClick={handleGoToMainPage} />
            <MenuItem text={"Map"} onClick={handleGoToMainPage} />
          </Col>
        </Row>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>
        <FooterWrapper>
          <p>Created by Antonín Světinský</p>
        </FooterWrapper>
      </Footer>
    </Layout>
  );
};
export default SiteLayout;
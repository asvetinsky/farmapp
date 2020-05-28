import React from "react";
import styled from "@emotion/styled";
import HeaderLogoText from "../atoms/HeaderLogoText";

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoWrapper onClick={onClick}>
      <HeaderLogoText>ChickenCoop</HeaderLogoText>
    </LogoWrapper>
  );
};

export default Logo;

import HeaderLink from "../atoms/HeaderLink";
import React from "react";

const MenuItem = ({ onClick, text }) => {
  return <HeaderLink onClick={onClick}>{text}</HeaderLink>;
};
export default MenuItem;

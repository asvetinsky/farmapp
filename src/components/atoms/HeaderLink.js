import styled from "@emotion/styled";

const HeaderLink = styled.a`
  position: relative;
  color: dodgerblue;
  text-decoration: none;
  font-size: 20px;
  padding-bottom: 7px;
  margin: 5px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: dodgerblue;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
export default HeaderLink;

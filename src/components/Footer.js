import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo_juiczing_dark_bg.svg";

const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="juiczing logo" />
      <h4>all rights reserved | {new Date().getFullYear()}</h4>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 10rem;
  background: var(--color-primary-2);
  text-align: center;
  display: grid;
  place-items: center;
  padding-top: 10px;

  h4 {
    margin-top: 0rem;
    color: var(--color-primary-6);
    font-weight: normal;
    text-transform: uppercase;
  }

  img {
    height: 80px;
  }
`;

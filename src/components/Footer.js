import React from "react";
import styled from "styled-components";
import Ebook from "../components/sections/Ebook";

import logo from "../assets/images/logo_juiczing_dark_bg.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Ebook />
      <section className="footer">
        <img src={logo} alt="juiczing logo" className="footer-logo" />
        <h4>all rights reserved | {new Date().getFullYear()}</h4>
      </section>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  .footer {
    height: 10rem;
    background: var(--color-primary-2);
    text-align: center;
    display: grid;
    place-items: center;
    padding-top: 10px;
  }
  h4 {
    margin-top: 0rem;
    color: var(--color-primary-6);
    font-weight: normal;
    text-transform: uppercase;
  }
  .footer-logo {
    height: 80px;
  }
`;

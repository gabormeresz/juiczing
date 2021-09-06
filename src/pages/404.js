import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Wrapper>
    <Seo title="Error" />
    <div className="container">
      <StaticImage
        className="image"
        src="../../assets/images/juiczing_home_1.png"
        alt="fruits in glasses"
        placeholder="blurred"
        layout="fullWidth"
      />
      <div className="overlay"></div>
      <div className="container-text">
        <h1>404</h1>
        <h4>Page not found</h4>
      </div>
    </div>
  </Wrapper>
);

export default NotFoundPage;

const Wrapper = styled.div`
  .container {
    display: grid;
    height: calc(100vh - 5rem);
    position: relative;
  }
  .image {
    grid-area: 1/1;
  }
  .container-text {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1,
  h4 {
    color: var(--color-primary-6);
    text-shadow: var(--shadow-dark-intensive);
  }
  h1 {
    font-size: 5rem;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

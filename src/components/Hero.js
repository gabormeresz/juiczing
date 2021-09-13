import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <StaticImage
          className="image"
          src="../assets/images/juiczing_home_1.png"
          alt="fruits in glasses"
          placeholder="blurred"
          layout="fullWidth"
        />
        <div className="overlay"></div>
        <h1>
          get healthier
          <br />
          <span>get juiczing</span>
        </h1>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  .hero {
    display: grid;
    overflow: hidden;
    height: 350px;
  }
  .image {
    grid-area: 1/1;
    height: 100%;
  }
  .overlay {
    grid-area: 1/1;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  h1 {
    grid-area: 1/1;
    z-index: 2;
    padding: 0.5rem 0.625rem;
    color: var(--color-primary-6);
    margin: auto;
    text-align: center;

    span {
      font-weight: 300;
      line-height: 1.1;
    }
  }
`;

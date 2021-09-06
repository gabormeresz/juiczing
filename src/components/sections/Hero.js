import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <StaticImage
          className="image"
          src="../../assets/images/juiczing_home_1.png"
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
    position: relative;
    overflow: hidden;
  }

  .image {
    grid-area: 1/1;
    height: 350px;
  }

  h1 {
    padding: 0.5rem 0.625rem;
    position: absolute;
    color: var(--color-primary-6);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
  h1 span {
    font-weight: 300;
    line-height: 1.1;
  }

  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: var(--transition-fast);
  }
`;

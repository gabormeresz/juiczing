import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="">
        <StaticImage
          src="../../assets/images/juiczing_home_1.png"
          alt="fruits in glasses"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div``;

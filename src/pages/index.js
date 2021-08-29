import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";

const IndexPage = () => (
  <Wrapper>
    <Seo title="Home" />
    <div className="">
      <StaticImage
        src="../assets/images/juiczing_home_1.png"
        alt="fruits in glasses"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
    <div className="">
      <StaticImage
        src="../assets/images/juiczing_home_2.png"
        alt="fresh vegetable drink"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
  </Wrapper>
);

export default IndexPage;

const Wrapper = styled.div``;

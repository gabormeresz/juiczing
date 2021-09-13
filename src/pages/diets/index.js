import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Seo from "../../components/Seo";
import DietsCards from "../../components/DietsCards";

const dietsPage = ({ data }) => {
  const {
    allContentfulDiet: { distinct: diets },
  } = data;

  return (
    <Wrapper>
      <Seo title="Diets" />
      <section>
        <DietsCards diets={diets} multipleColumns />
      </section>
    </Wrapper>
  );
};

export const query = graphql`
  {
    allContentfulDiet {
      distinct(field: name)
    }
  }
`;

export default dietsPage;

const Wrapper = styled.div`
  section {
    display: grid;
    padding: 2rem 2rem;
  }

  @media screen and (min-width: 768px) {
    section {
      padding: 3rem 3rem;
    }
  }
`;

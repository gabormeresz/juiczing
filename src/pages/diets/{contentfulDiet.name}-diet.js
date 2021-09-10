import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Seo from "../../components/Seo";
import RichTextContent from "../../components/sections/RichtextContent";
import ArticleHero from "../../components/sections/ArticleHero";

const DietTemplate = ({ data }) => {
  const {
    contentfulDiet: { name, image, description },
  } = data;

  return (
    <Wrapper>
      <Seo
        title={`${name} diet`}
        //    description={description}
      />
      <div className="diet-page">
        <ArticleHero image={image} title={name} diet />
        <div className="text-content">
          <RichTextContent richText={description} />
        </div>
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  query getSingleDiet($name: String) {
    contentfulDiet(name: { eq: $name }) {
      name
      description {
        raw
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default DietTemplate;

const Wrapper = styled.div`
  .text-content {
    padding: 3.5rem 2rem;
  }

  @media screen and (min-width: 768px) {
    .text-content {
      padding: 3.5rem 6rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .text-content {
      padding: 4rem 12rem;
    }
  }
`;

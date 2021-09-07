import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Seo from "../../components/Seo";
import RichTextContent from "../../components/sections/RichtextContent";
import ArticleHero from "../../components/sections/ArticleHero";

const ArticleTemplate = ({ data }) => {
  const {
    contentfulArticle: { title, image, articleRichText },
  } = data;

  return (
    <Wrapper>
      <Seo
        title={title}
        //    description={description}
      />
      <div className="article-page">
        <ArticleHero image={image} title={title} titleIsLong />
        <div className="text-content">
          <RichTextContent richText={articleRichText} />
        </div>
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  query getSingleArticle($title: String) {
    contentfulArticle(title: { eq: $title }) {
      title
      articleRichText {
        raw
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default ArticleTemplate;

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

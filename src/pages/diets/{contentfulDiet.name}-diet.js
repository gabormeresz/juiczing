import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Seo from "../../components/Seo";

const Bold = ({ children }) => <span>{children}</span>;
const Text = ({ children }) => <p>{children}</p>;
const Heading = ({ children }) => <h4>{children}</h4>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_4]: (node, children) => <Heading>{children}</Heading>,
  },
};

const DietTemplate = ({ data }) => {
  const {
    contentfulDiet: { name, image, description },
  } = data;
  const pathToImage = getImage(image);

  return (
    <Wrapper>
      <Seo
        title={name}
        //    description={description}
      />
      <div className="diet-page">
        <div className="hero">
          <GatsbyImage image={pathToImage} className="image" alt={name} />
          <div className="hero-container">
            <div className="title-container">
              <h1>
                {name} <span>diet</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="text-content">
          {description && renderRichText(description, options)}
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
  .hero {
    position: relative;
    height: 200px;
  }
  .hero-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .image {
    height: 100%;
  }
  .title-container {
    padding: 1rem 1rem;
    background-color: var(--color-grass-light-transparent);
  }
  h1 {
    color: var(--color-primary-6);
  }
  h1 span {
    font-weight: 300;
  }
  .text-content {
    padding: 3.5rem 2rem;
  }
  h4 {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    color: var(--color-grass-light);
    font-size: 1.25rem;
  }
  h4:first-child {
    padding-top: 0.5rem;
  }
  p {
    padding-bottom: 1rem;
  }
  p span {
    font-weight: 700;
  }
  ul {
    list-style-type: disc;
    padding-left: 1rem;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    .title-container {
      padding: 1.5rem 1.5rem;
    }
    .hero {
      height: 250px;
    }
    .text-content {
      padding: 3.5rem 6rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .text-content {
      padding: 4rem 12rem;
    }
    h4 {
      padding-top: 2.5rem;
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }
  } ;
`;

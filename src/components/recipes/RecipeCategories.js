import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allContentfulCategory(sort: { fields: order, order: ASC }) {
      nodes {
        name
        alt
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

const RecipeCategories = () => {
  const {
    allContentfulCategory: { nodes: categories },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      {categories.map((category, index) => {
        const { alt, name, image } = category;

        return (
          <Link
            key={index}
            to="/recipes"
            className="category"
            state={{ category: name }}
          >
            <GatsbyImage className="img" alt={alt} image={getImage(image)} />
            <div className="overlay"></div>
            <h3>
              {name}
              <br />
              <span>recipes</span>
            </h3>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default RecipeCategories;

const Wrapper = styled.section`
  & {
    display: grid;
    padding: 2.5rem 1.25rem;
    gap: 2.5rem;
  }
  .category {
    overflow: hidden;
    display: grid;
    height: 230px;

    &:hover .overlay {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .img {
    grid-area: 1/1;
    height: 100%;
  }
  h3 {
    color: var(--color-primary-6);
    grid-area: 1/1;
    margin: auto;
    text-align: center;
    z-index: 2;

    span {
      font-weight: 300;
      line-height: 1.1;
    }
  }
  .overlay {
    grid-area: 1/1;
    background-color: rgba(0, 0, 0, 0.3);
    transition: var(--transition-fast);
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 2.5rem 2.5rem;
      gap: 1.25rem;
    }
    .category {
      height: 200px;
    }
  }
  @media screen and (min-width: 1200px) {
    & {
      padding: 2.5rem 3.75rem;
      gap: 1.875rem;
    }
    .category {
      height: 230px;
    }
  }
`;

import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const RecipeCard = props => {
  const { slug, pathToImage, title, calories } = props;

  return (
    <Wrapper>
      <Link to={`/recipes/${slug}`} className="recipe">
        <GatsbyImage image={pathToImage} className="recipe-img" alt={title} />
        <div>
          <h4>{title}</h4>
          <p>{calories} Kcal / 100g</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default RecipeCard;

const Wrapper = styled.div`
  .recipe {
    display: grid;
    grid-template-rows: 15rem 1fr;
    align-items: start;
  }
  .recipe-img {
    height: 15rem;
    border-radius: var(--radius);
  }
  h4 {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.3;
    color: var(--color-primary-1);
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 1;
    color: var(--color-primary-2);
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    .recipe {
      grid-template-rows: 10rem 1fr;
    }
    .recipe-img {
      height: 10rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .recipe {
      grid-template-rows: 13rem 1fr;
    }
    .recipe-img {
      height: 13rem;
    }
    h4 {
      font-size: 1.15rem;
    }
  }
`;

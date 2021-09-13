import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleHero = ({ image, title, diet, titleIsLong }) => {
  const pathToImage = getImage(image);
  return (
    <Wrapper>
      <GatsbyImage image={pathToImage} className="image" alt={title} />
      <div className="title-container">
        <h1 className={titleIsLong ? "long-title" : ""}>
          {title}
          {diet ? <span> diet</span> : ""}
        </h1>
      </div>
    </Wrapper>
  );
};

export default ArticleHero;

const Wrapper = styled.div`
  & {
    display: grid;
    height: 220px;
  }
  .image {
    grid-area: 1/1;
    height: 100%;
  }
  .title-container {
    grid-area: 1/1;
    z-index: 1;
    display: grid;
    place-items: center;
  }
  h1 {
    color: var(--color-primary-6);
    background-color: var(--color-grass-light-transparent);
    padding: 1.25rem 1.25rem;
    font-size: 2rem;
    text-align: center;

    &.long-title {
      font-size: 1.5rem;
      font-weight: 400;
    }
    span {
      font-weight: 300;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      height: 250px;
    }
    .title-container {
      padding: 1.5rem 1.5rem;
    }
    h1 {
      font-size: 3rem;

      &.long-title {
        font-size: 1.875rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .title-container {
      padding: 2rem 2rem;
    }
    h1.long-title {
      font-size: 2.5rem;
    }
  }
`;

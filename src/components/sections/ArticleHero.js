import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleHero = ({ image, title, diet, titleIsLong }) => {
  const pathToImage = getImage(image);
  return (
    <Wrapper>
      <div className="hero">
        <GatsbyImage image={pathToImage} className="image" alt={title} />
        <div className="hero-container">
          <div className="title-container">
            <h1 className={titleIsLong ? "long-title" : ""}>
              {title}
              {diet ? <span> diet</span> : ""}
            </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticleHero;

const Wrapper = styled.div`
  .hero {
    position: relative;
    height: 220px;
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
    padding: 1.25rem 1.25rem;
    background-color: var(--color-grass-light-transparent);
  }
  h1 {
    color: var(--color-primary-6);
    font-size: 2rem;
    text-align: center;
  }
  h1.long-title {
    font-size: 1.5rem;
    font-weight: 400;
  }
  h1 span {
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    .title-container {
      padding: 1.5rem 1.5rem;
    }
    .hero {
      height: 250px;
    }
    h1 {
      font-size: 3rem;
    }
    h1.long-title {
      font-size: 1.875rem;
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

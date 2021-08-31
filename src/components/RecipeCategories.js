import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allContentfulCategory {
      nodes {
        name
        path
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
      <div className="categories">
        {categories.map((category, index) => {
          const { path, alt, name, image } = category;

          return (
            <Link key={index} to={path} className="category">
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
      </div>
    </Wrapper>
  );
};

export default RecipeCategories;

const Wrapper = styled.section`
  display: block;

  .categories {
    display: grid;
    padding: 40px 20px;
    gap: 40px;
  }

  .category {
    position: relative;
    overflow: hidden;
    height: 230px;
  }

  .img {
    height: 100%;
  }

  h3 {
    position: absolute;
    color: var(--color-primary-6);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
  h3 span {
    font-weight: 300;
    line-height: 1.1;
  }

  .overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 768px) {
    .categories {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 40px 40px;
      gap: 20px;
    }
    .category {
      height: 200px;
    }
  }
  @media screen and (min-width: 1200px) {
    .categories {
      padding: 40px 60px;
      gap: 30px;
    }
    .category {
      height: 230px;
    }
  }
`;

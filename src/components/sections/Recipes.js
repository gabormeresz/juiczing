import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: createdAt }, limit: 6) {
      nodes {
        title
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        details {
          nutrition {
            calories
          }
        }
      }
    }
  }
`;

const Recipes = ({ linkToAll }) => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);
  console.log(recipes);

  return (
    <Wrapper>
      <div className="recipes-container">
        <div className="recipes-list">
          {recipes.map(recipe => {
            const {
              id,
              title,
              image,
              details: {
                nutrition: { calories },
              },
            } = recipe;
            const pathToImage = getImage(image);
            const slug = slugify(title, { lower: true });

            return (
              <Link to={`/recipes/${slug}`} key={id} className="recipe">
                <GatsbyImage
                  image={pathToImage}
                  className="recipe-img"
                  alt={title}
                />
                <div>
                  <h4>{title}</h4>
                  <p>{calories} Kcal / 100g</p>
                </div>
              </Link>
            );
          })}
        </div>
        {linkToAll && (
          <div className="all-recipes">
            <Link to="/recipes">
              <h4>
                go to all recipes{" "}
                <IoIosArrowRoundForward size="1.25rem" className="arrow" />
              </h4>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Recipes;

const Wrapper = styled.section`
  .recipes-container {
    padding: 3rem 2rem;
  }

  .recipes-list {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;
  }

  .recipe {
    display: grid;
    grid-template-rows: 15rem 1fr;
    align-items: start;
  }
  .recipe-img {
    height: 15rem;
    border-radius: var(--radius);
  }

  .recipe h4 {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.3;
    color: var(--color-primary-1);
    font-weight: 700;
  }
  .recipe p {
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 1;
    color: var(--color-primary-2);
    margin-top: 0.5rem;
  }

  .all-recipes {
    margin-top: 0.25rem;
    display: grid;
    place-items: center;
  }

  .all-recipes h4 {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
  }

  @media screen and (min-width: 768px) {
    .recipes-list {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .recipe-img {
      height: 10rem;
    }

    .recipe {
      grid-template-rows: 10rem 1fr;
    }

    .recipe p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .recipe-img {
      height: 13rem;
    }
    .recipe {
      grid-template-rows: 13rem 1fr;
    }
    .recipe h4 {
      font-size: 1.15rem;
    }
    .recipes-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

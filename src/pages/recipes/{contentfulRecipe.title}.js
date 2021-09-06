import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import Seo from "../../components/Seo";

const RecipeTemplate = ({ pageContext: { title }, data }) => {
  const {
    // title,
    description: { description },
    details: { ingredients, instructions, tags, nutrition },
    image,
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);

  console.log(data);
  console.log(nutrition);
  console.log(title);
  console.log(description);
  console.log(tags);

  const { calories, carbohydrates, fiber, fat, protein, sugar } = nutrition;

  return (
    <Wrapper>
      <Seo title={title} description={description} />
      <div className="recipe-page">
        {/* hero */}
        <section className="recipe-hero">
          <GatsbyImage image={pathToImage} alt={title} className="about-img" />
          <article className="recipe-info">
            <h2>{title}</h2>
            <p>{description}</p>

            {/* tags */}
            <p className="recipe-tags">
              <span>Tags </span>
              {tags.map((tag, index) => {
                return (
                  <Link
                    key={index}
                    to="/recipes"
                    className="category"
                    state={{ tag }}
                  >
                    {tag}
                  </Link>
                );
              })}
            </p>
          </article>
        </section>
        {/* rest of the content */}
        <section className="recipe-content">
          <article>
            <h4>instructions</h4>
            {instructions.map((item, index) => {
              return (
                <div key={index} className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              );
            })}
          </article>
          <article className="second-column">
            <div>
              <h4>ingredients</h4>
              {ingredients.map((item, index) => {
                return (
                  <p key={index} className="single-ingredient">
                    {item}
                  </p>
                );
              })}
            </div>
            <div>
              <h4>nutrition</h4>
              <p className="single-nutrition">Calories: {calories}Kcal</p>
              <p className="single-nutrition">
                Carbohydrates: {carbohydrates}g
              </p>
              <p className="single-nutrition">Protein: {protein}g</p>
              <p className="single-nutrition">Fat: {fat}g</p>
              <p className="single-nutrition">Fiber: {fiber}g</p>
              <p className="single-nutrition">Sugar: {sugar}g</p>
            </div>
          </article>
        </section>
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      description {
        description
      }
      details {
        ingredients
        instructions
        nutrition {
          calories
          carbohydrates
          fiber
          fat
          protein
          sugar
        }
        tags
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;

const Wrapper = styled.div`
  .recipe-page {
    /* padding: 20px 20px; */
  }

  .recipe-info {
    display: grid;
    gap: 1rem;
  }

  .recipe-hero {
    display: grid;
    gap: 2rem;

    padding: 3rem 2rem;
  }

  .about-img {
    height: 100%;
    min-height: 300px;
  }

  .recipe-tags {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.75rem;
    font-weight: 800;
  }
  .recipe-tags span {
    padding-right: 0.75rem;
    letter-spacing: var(--spacing-mild);
  }
  .recipe-tags a {
    background: var(--color-grass-light);
    border-radius: var(--radius);
    color: var(--color-primary-6);
    padding: 0.25rem 0.75rem;
    margin: 0 0.25rem;
    text-transform: capitalize;
  }

  .recipe-content {
    padding: 2rem 2rem;
    padding-top: 0rem;
    display: grid;
    gap: 2.5rem 5rem;
  }

  @media screen and (min-width: 768px) {
    .recipe-hero {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      min-height: 300px;
    }
    .recipe-content {
      grid-template-columns: 3fr 2fr;
    }
  }

  .single-instruction {
    padding-bottom: 1rem;
  }

  .single-instruction:last-of-type {
    padding-bottom: 0;
  }

  .single-instruction header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
  }
  .single-instruction header p {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-grass-light);
    margin-bottom: 0;
  }

  .single-instruction header div {
    height: 1px;
    background: var(--color-primary-4);
  }

  .second-column {
    display: grid;
    row-gap: 2.5rem;
  }

  .single-ingredient {
    border-bottom: 1px solid var(--color-primary-4);
    margin-bottom: 0.75rem;
  }
  .single-ingredient:last-of-type {
    margin-bottom: 0;
  }
  .single-nutrition {
    border-bottom: 1px solid var(--color-primary-4);
    margin-bottom: 0.75rem;
    color: var(--color-primary-1);
    text-transform: capitalize;
  }

  h4 {
    padding-bottom: 1rem;
  }
`;

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
              Tags :
              {tags.map((tag, index) => {
                const slug = slugify(tag, { lower: true });
                return (
                  <Link key={index} to={`/tags/${slug}`}>
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
          <article className="second-colomn">
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

const Wrapper = styled.div``;

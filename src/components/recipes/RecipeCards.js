import React from "react";
import { getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import styled from "styled-components";

import RecipeCard from "./RecipeCard";

const RecipeCards = ({ recipes }) => {
  return (
    <Wrapper>
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
          <RecipeCard
            key={id}
            slug={slug}
            title={title}
            calories={calories}
            pathToImage={pathToImage}
          />
        );
      })}
    </Wrapper>
  );
};

export default RecipeCards;

const Wrapper = styled.div`
  & {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;
  }

  @media screen and (min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
      gap: 2rem 2rem;
    }
  }
`;

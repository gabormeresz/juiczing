import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import DietsCards from "./DietsCards";

const query = graphql`
  {
    allContentfulDiet(filter: { featured: { eq: true } }, limit: 3) {
      distinct(field: name)
    }
  }
`;

const DietsTeaser = () => {
  const {
    allContentfulDiet: { distinct: featuredDiets },
  } = useStaticQuery(query);
  console.log(featuredDiets);

  return (
    <Wrapper>
      <div className="diets">
        <h2>
          how to get enough <span>nutrients?</span>
        </h2>
        <div className="container">
          <div className="info">
            <p>
              Consuming a low-calorie diet means you’re consuming fewer total
              micronutrients. As humans, we’re designed to consume large amounts
              of nutrient-dense calories to meet our body’s needs. When you’re
              constantly restricting your caloric intake, it’s easy to become
              malnourished.
            </p>
            <p>
              When you’re consuming low-quality foods, likepasteurized non-fat
              milk and other frankenfoods, you have to eat even more to obtain
              the right amounts of nutrition. That’s how you get fat. And just
              one more example of why food quality matters....
            </p>
          </div>
          <DietsCards diets={featuredDiets} showArrow />
        </div>
      </div>
    </Wrapper>
  );
};

export default DietsTeaser;

const Wrapper = styled.section`
  .diets {
    padding: 30px 20px 40px 20px;
  }
  h2 {
    font-weight: 400;
    text-align: center;
  }
  h2 span {
    font-weight: 800;
    line-height: 1.2;
  }

  .container {
    display: grid;
    gap: 20px;
    padding-top: 40px;
    align-items: center;
  }

  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .type {
    display: flex;
    align-items: center;
    padding: 20px 40px;
    width: 100%;
    background-color: var(--color-primary-5);
    transition: var(--transition-fast);
  }

  .type:hover {
    background-color: var(--color-primary-4);
  }

  .type h4 span {
    font-weight: 400;
    line-height: 1.2;
  }

  @media screen and (min-width: 768px) {
    .diets {
      padding: 30px 80px 40px 80px;
    }
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }
  }
  @media screen and (min-width: 1200px) {
    .diets {
      padding: 30px 120px 40px 120px;
    }
    .container {
      gap: 100px;
    }
  }
`;
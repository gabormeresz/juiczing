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

  return (
    <Wrapper>
      <h2>
        how to get enough <span>nutrients?</span>
      </h2>
      <div className="container">
        <div className="info">
          <p>
            Losing weight or eating better on your mind these days? There's no
            shortage of weight loss diets grappling for your attention. And the
            reality is that most diets — the good and bad — will help you shed
            pounds in the short term.
          </p>
          <p>
            But the difference is in keeping them off, and that relies on having
            a doable plan that you can stick with for life. Usually, that means
            that diets that cut out entire food groups or impose strict rules
            for eating. Learn more about the trending diets and if any of them
            are good for you!
          </p>
        </div>
        <DietsCards diets={featuredDiets} showArrow />
      </div>
    </Wrapper>
  );
};

export default DietsTeaser;

const Wrapper = styled.section`
  & {
    padding: 1.875rem 1.25rem 2.5rem 1.25rem;
  }
  h2 {
    font-weight: 400;
    text-align: center;

    span {
      font-weight: 800;
      line-height: 1.2;
    }
  }
  p:first-child {
    padding-bottom: 1rem;
  }
  .container {
    display: grid;
    gap: 1.25rem;
    padding-top: 2.5rem;
    align-items: center;
  }
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;
  }
  .type {
    display: flex;
    align-items: center;
    padding: 1.25rem 2.5rem;
    width: 100%;
    background-color: var(--color-primary-5);
    transition: var(--transition-fast);

    &:hover {
      background-color: var(--color-primary-4);
    }
    h4 span {
      font-weight: 400;
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 768px) {
    & {
      padding: 1.875rem 5rem 2.5rem 5rem;
    }
    .container {
      grid-template-columns: 1fr 1fr;
      gap: 3.125rem;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
      padding: 1.875rem 7.5rem 2.5rem 7.5rem;
    }
    .container {
      gap: 6.25rem;
    }
  }
`;

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
      <div className="diets">
        <h2>
          how to get enough <span>nutrients?</span>
        </h2>
        <div className="container">
          <div className="info">
            <p>
              Losing weight or eating better on your mind these days? There's no
              shortage of weight loss diets grappling for your attention. And
              the reality is that most diets — the good and bad — will help you
              shed pounds in the short term.
            </p>
            <p>
              But the difference is in keeping them off, and that relies on
              having a doable plan that you can stick with for life. Usually,
              that means that diets that cut out entire food groups or impose
              strict rules for eating. Learn more about the trending diets and
              if any of them are good for you!
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
  p:first-child {
    padding-bottom: 1rem;
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

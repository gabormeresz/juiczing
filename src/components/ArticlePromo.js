import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "gatsby";

const ArticlePromo = () => {
  return (
    <Wrapper>
      <StaticImage
        className="image"
        src="../assets/images/juiczing_home_2.png"
        alt="fresh vegetable drink"
        placeholder="blurred"
        layout="fullWidth"
        objectPosition="left"
      />
      <div className="text-container">
        <h3>how to make your green juice super nutritious?</h3>
        <Link
          to="/articles/how-to-do-a-3-day-detox-juice-cleanse/"
          className="link"
        >
          <button className="btn-transparent">read article</button>
          <IoIosArrowRoundForward className="arrow" size={"1.5em"} />
        </Link>
      </div>
    </Wrapper>
  );
};

export default ArticlePromo;

const Wrapper = styled.div`
  & {
    display: grid;
    height: 300px;
  }
  .image {
    grid-area: 1/1;
  }
  .text-container {
    grid-area: 1/1;
    z-index: 2;
    display: grid;
    grid-template-rows: 7fr 3fr;
    padding: 1.25rem 40% 0 1.25rem;
  }
  h3 {
    color: var(--color-primary-6);
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.2;
    align-self: end;
  }
  .link {
    align-self: start;
    display: flex;
    align-items: center;
    padding-top: 0.625rem;
  }
  .arrow {
    padding-bottom: 1px;
    color: var(--color-grass-light);
  }

  @media screen and (min-width: 768px) {
    .text-container {
      padding: 1.25rem 55% 1.25rem 2.5rem;
    }
    h3 {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 1200px) {
    & {
      height: 400px;
    }
    .text-container {
      padding: 1.25rem 62% 1.25rem 3.75rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "gatsby";

const ArticlePromo = () => {
  return (
    <Wrapper>
      <div className="image-wrapper">
        <StaticImage
          className="image"
          src="../../assets/images/juiczing_home_2.png"
          alt="fresh vegetable drink"
          placeholder="blurred"
          layout="fullWidth"
          objectPosition="left"
        />
        <div className="text">
          <h3>how to make your green juice super nutritious?</h3>
          <Link to="/" className="link">
            <button className="btn-transparent">read article</button>
            <IoIosArrowRoundForward className="arrow" size={"1.5em"} />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ArticlePromo;

const Wrapper = styled.div`
  .image-wrapper {
    display: grid;
  }
  .image {
    grid-area: 1/1;
    height: 300px;
  }
  .text {
    z-index: 2;
    grid-area: 1/1;
    align-items: center;
    justify-items: start;
    display: grid;
    grid-template-rows: 7fr 3fr;
    padding: 20px 40% 0px 20px;
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
    padding-top: 10px;
  }
  .arrow {
    padding-bottom: 1px;
    color: var(--color-grass-light);
  }

  @media screen and (min-width: 768px) {
    .text {
      padding: 20px 55% 20px 40px;
    }
    h3 {
      font-size: 1.7rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .image {
      height: 400px;
    }
    .text {
      padding: 20px 62% 20px 60px;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;

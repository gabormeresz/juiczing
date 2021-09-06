import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Ebook = () => {
  return (
    <Wrapper>
      <div className="ebook">
        <h3 className="text">
          grab your copy of the
          <br />
          <span>7 day easy detox</span>
          <br />
          guide book for a gentle cleanse
        </h3>
        <div className="image">
          <StaticImage
            src="../../assets/images/ebook.png"
            alt="detox guide book"
            placeholder="blurred"
            layout="fullWidth"
          />
        </div>
        <div className="btn-container">
          <button className="btn">coming soon...</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Ebook;

const Wrapper = styled.section`
  .ebook {
    background-color: var(--color-primary-5);
    display: grid;
    padding: 40px 40px;
    gap: 30px;
  }

  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.3;

    span {
      font-weight: 800;
    }
  }
  .image {
    padding: 0px 20px;
    place-items: center;
  }
  .btn {
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .ebook {
      grid-template-areas:
        "img text"
        "img btn";
      grid-template-columns: 2fr 3fr;
      row-gap: 20px;
      column-gap: 50px;
    }
    .image {
      grid-area: img;
      padding: 0px 0px;
    }
    .text {
      grid-area: text;
      align-self: end;
    }
    .btn-container {
      grid-area: btn;
    }
    .btn {
      margin-left: 0px;
    }
  }
  @media screen and (min-width: 1200px) {
    .ebook {
      padding: 40px 60px;
    }
  }
`;

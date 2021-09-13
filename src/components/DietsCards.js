import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import slugify from "slugify";

const DietsCards = ({ diets = [], showArrow, multipleColumns }) => {
  return (
    <Wrapper>
      <div className={multipleColumns ? "cards multiple-columns" : "cards"}>
        {diets.map((diet, index) => {
          const slug = slugify(diet, { lower: true });
          return (
            <Link to={`/diets/${slug}-diet`} key={index} className="type">
              <h4>
                {diet} <span>diet</span>
              </h4>
              {showArrow && <IoIosArrowRoundForward size={"1.5em"} />}
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default DietsCards;

const Wrapper = styled.div`
  .cards {
    display: grid;
    width: 100%;
    gap: 1rem;
    justify-items: center;
  }

  .type {
    display: flex;
    align-items: center;
    padding: 1.5rem 2.5rem;
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
    .cards.multiple-columns {
      grid-template-columns: 1fr 1fr 1fr;

      .type {
        min-height: 100px;
      }
    }
  }
`;

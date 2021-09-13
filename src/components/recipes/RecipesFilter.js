import React from "react";
import styled from "styled-components";

const RecipesFilter = props => {
  const { categories, activeFilters, setActiveFilters, tags, initialRecipes } =
    props;
  return (
    <Wrapper>
      <h4>categories</h4>
      <div className="filter first">
        {categories.map((category, index) => {
          return (
            <p
              key={index}
              className={`${
                category === activeFilters.catFilter ? "active" : null
              }`}
              onClick={() => {
                setActiveFilters({
                  tagFilter: tags[0],
                  catFilter: categories[index],
                });
              }}
            >
              {category}
            </p>
          );
        })}
      </div>
      <h4>tags</h4>
      <div className="filter">
        {tags.map((tag, index) => {
          if (
            activeFilters.catFilter !== "all" &&
            index !== 0 &&
            initialRecipes
              .filter(
                recipe => recipe.category.toString() === activeFilters.catFilter
              )
              .filter(recipe => recipe.details.tags.includes(tag)).length === 0
          ) {
            return null;
          }

          return (
            <p
              key={index}
              className={`${tag === activeFilters.tagFilter ? "active" : null}`}
              onClick={() => {
                setActiveFilters(prevState => {
                  return { ...prevState, tagFilter: tags[index] };
                });
              }}
            >
              {`${tag}${
                tag === "all"
                  ? ""
                  : activeFilters.catFilter === "Smoothie"
                  ? " Smoothie"
                  : activeFilters.catFilter === "Juice"
                  ? " Juice"
                  : ""
              }`}
            </p>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default RecipesFilter;

const Wrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .filter {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &.first {
      padding-bottom: 1rem;
    }
    p {
      padding-bottom: 0.25rem;
      font-size: 0.875rem;
      text-transform: capitalize;
      display: block;
      color: var(--color-primary-2);
      transition: var(--transition);

      &.active {
        color: var(--color-grass-light);
        font-weight: 700;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .filter {
      display: grid;
      grid-template-columns: 1fr;

      p:hover {
        color: var(--color-grass-light);
        cursor: pointer;
      }
    }
  }
`;

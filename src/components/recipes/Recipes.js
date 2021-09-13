import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

import RecipeCards from "./RecipeCards";
import RecipesFilter from "./RecipesFilter";

const query = graphql`
  {
    limitedRecipes: allContentfulRecipe(sort: { fields: createdAt }, limit: 6) {
      nodes {
        title
        id
        category
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        details {
          nutrition {
            calories
          }
          tags
        }
      }
    }
    allRecipes: allContentfulRecipe(sort: { fields: createdAt }) {
      nodes {
        title
        id
        category
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        details {
          nutrition {
            calories
          }
          tags
        }
      }
    }
    allTags: allContentfulRecipe(sort: { order: ASC, fields: details___tags }) {
      distinct(field: details___tags)
    }
    allCategories: allContentfulRecipe(sort: { order: ASC, fields: category }) {
      distinct(field: category)
    }
  }
`;

const Recipes = ({ showAll, showFilter, initialCategory, initialTag }) => {
  const data = useStaticQuery(query);
  const initialRecipes = showAll
    ? data.allRecipes.nodes
    : data.limitedRecipes.nodes;
  const [recipes, setRecipes] = useState(initialRecipes);

  const tags = ["all", ...data.allTags.distinct];
  const categories = ["all", ...data.allCategories.distinct];

  const [activeFilters, setActiveFilters] = useState({
    tagFilter: initialTag || tags[0],
    catFilter: initialCategory || categories[0],
  });

  useEffect(() => {
    let newRecipes;

    if (
      activeFilters.catFilter === "all" &&
      activeFilters.tagFilter === "all"
    ) {
      newRecipes = initialRecipes;
    } else if (activeFilters.catFilter === "all") {
      newRecipes = initialRecipes.filter(recipe =>
        recipe.details.tags.includes(activeFilters.tagFilter)
      );
    } else if (activeFilters.tagFilter === "all") {
      newRecipes = initialRecipes.filter(
        recipe => recipe.category.toString() === activeFilters.catFilter
      );
    } else {
      newRecipes = initialRecipes.filter(
        recipe =>
          recipe.details.tags.includes(activeFilters.tagFilter) &&
          recipe.category.toString() === activeFilters.catFilter
      );
    }
    setRecipes(newRecipes);
  }, [activeFilters, initialRecipes]);

  return (
    <Wrapper>
      {/* Header */}
      {!showAll && (
        <div className="header">
          <h2>juiczing recipes</h2>
        </div>
      )}

      <div className={`recipes-container ${showFilter ? "showFilter" : ""}`}>
        {/* Filters */}
        {showFilter && (
          <RecipesFilter
            categories={categories}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            tags={tags}
            initialRecipes={initialRecipes}
          />
        )}

        {/* Recipe Cards */}
        <RecipeCards recipes={recipes} />

        {/* Link to all recipes page */}
        {!showAll && (
          <div className="to-all-recipes">
            <Link to="/recipes">
              <h4>
                go to all recipes{" "}
                <IoIosArrowRoundForward size="1.25rem" className="arrow" />
              </h4>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Recipes;

const Wrapper = styled.section`
  .recipes-container {
    padding: 3rem 2rem;
    gap: 2rem 2rem;

    &.showFilter {
      display: grid;
    }
  }
  .header {
    padding: 4.5rem 2rem 0 2rem;

    h2 {
      font-weight: 400;
      text-align: center;
    }
  }
  .to-all-recipes {
    margin-top: 0.25rem;
    display: grid;
    place-items: center;

    h4 {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    .recipes-container.showFilter {
      grid-template-columns: 12rem 1fr;
    }
  }
`;

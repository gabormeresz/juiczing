import React, { useState, useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

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

const Recipes = ({ showAll, showFilter, initialCategory }) => {
  const data = useStaticQuery(query);
  const initialRecipes = showAll
    ? data.allRecipes.nodes
    : data.limitedRecipes.nodes;
  const [recipes, setRecipes] = useState(initialRecipes);

  const tags = ["all", ...data.allTags.distinct];
  const categories = ["all", ...data.allCategories.distinct];

  const [activeFilters, setActiveFilters] = useState({
    tagFilter: tags[0],
    catFilter: initialCategory || categories[0],
  });

  console.log(initialCategory);

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
  }, [activeFilters]);

  console.log(recipes);
  console.log(activeFilters);
  console.log(tags);

  return (
    <Wrapper>
      <div className={`recipes-container ${showFilter ? "showFilter" : ""}`}>
        {showFilter && (
          <div className="filter-container">
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
                      recipe =>
                        recipe.category.toString() === activeFilters.catFilter
                    )
                    .filter(recipe => recipe.details.tags.includes(tag))
                    .length === 0
                ) {
                  return null;
                }

                return (
                  <p
                    key={index}
                    className={`${
                      tag === activeFilters.tagFilter ? "active" : null
                    }`}
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
          </div>
        )}
        <div className="recipes-list">
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
              <Link to={`/recipes/${slug}`} key={id} className="recipe">
                <GatsbyImage
                  image={pathToImage}
                  className="recipe-img"
                  alt={title}
                />
                <div>
                  <h4>{title}</h4>
                  <p>{calories} Kcal / 100g</p>
                </div>
              </Link>
            );
          })}
        </div>
        {!showAll && (
          <div className="all-recipes">
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
  }

  .recipes-container.showFilter {
    display: grid;
  }

  .recipes-list {
    display: grid;
    gap: 2rem 1rem;
    padding-bottom: 3rem;
  }

  .recipe {
    display: grid;
    grid-template-rows: 15rem 1fr;
    align-items: start;
  }
  .recipe-img {
    height: 15rem;
    border-radius: var(--radius);
  }

  .recipe h4 {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 0.5rem;
    line-height: 1.3;
    color: var(--color-primary-1);
    font-weight: 700;
  }
  .recipe p {
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 1;
    color: var(--color-primary-2);
    margin-top: 0.5rem;
  }

  .all-recipes {
    margin-top: 0.25rem;
    display: grid;
    place-items: center;
  }

  .all-recipes h4 {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
  }

  .filter-container {
    display: flex;
    flex-direction: column;
  }
  .filter {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .filter.first {
    padding-bottom: 1rem;
  }
  .filter-container h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .filter p {
    padding-bottom: 0.25rem;
    font-size: 0.875rem;
    text-transform: capitalize;
    display: block;
    color: var(--color-primary-2);
    transition: var(--transition);
  }
  .filter p:hover {
    color: var(--color-primary-4);
    cursor: pointer;
  }
  .filter p.active {
    color: var(--color-grass-light);
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    .recipes-container.showFilter {
      grid-template-columns: 12rem 1fr;
    }
    .recipes-list {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .recipe-img {
      height: 10rem;
    }

    .recipe {
      grid-template-rows: 10rem 1fr;
    }

    .recipe p {
      font-size: 1rem;
    }
    .filter-container {
    }
    .filter {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (min-width: 1200px) {
    .recipe-img {
      height: 13rem;
    }
    .recipe {
      grid-template-rows: 13rem 1fr;
    }
    .recipe h4 {
      font-size: 1.15rem;
    }
    .recipes-list {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem 2rem;
    }
  }
`;

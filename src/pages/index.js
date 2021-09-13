import React from "react";

import Seo from "../components/Seo";
import RecipeCategories from "../components/recipes/RecipeCategories";
import DietsTeaser from "../components/DietsTeaser";
import ArticlePromo from "../components/ArticlePromo";
import Hero from "../components/Hero";
import CalorieCalculator from "../components/CalorieCalculator";
import Recipes from "../components/recipes/Recipes";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <RecipeCategories />
    <DietsTeaser />
    <ArticlePromo />
    <Recipes />
    <CalorieCalculator />
  </>
);

export default IndexPage;

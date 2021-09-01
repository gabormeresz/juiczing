import React from "react";

import Seo from "../components/Seo";
import RecipeCategories from "../components/sections/RecipeCategories";
import Nutrients from "../components/sections/Nutrients";
import ArticlePromo from "../components/sections/ArticlePromo";
import Hero from "../components/sections/Hero";
import CalorieCalculator from "../components/sections/CalorieCalculator";
import Recipes from "../components/sections/Recipes";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Hero />
    <RecipeCategories />
    <Nutrients />
    <ArticlePromo />
    <Recipes />
    <CalorieCalculator />
  </>
);

export default IndexPage;

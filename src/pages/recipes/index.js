import React from "react";

import Seo from "../../components/Seo";
import Recipes from "../../components/sections/Recipes";

const recipesPage = props => {
  return (
    <>
      <Seo title="Recipes" />
      <Recipes
        showAll
        showFilter
        initialCategory={props.location.state?.category}
        initialTag={props.location.state?.tag}
      />
    </>
  );
};

export default recipesPage;

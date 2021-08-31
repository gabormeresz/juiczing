import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/Seo";
import RecipeCategories from "../components/RecipeCategories";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="">
      <StaticImage
        src="../assets/images/juiczing_home_1.png"
        alt="fruits in glasses"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
    <RecipeCategories />
    <div className="">
      <StaticImage
        src="../assets/images/juiczing_home_2.png"
        alt="fresh vegetable drink"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
  </>
);

export default IndexPage;

import React from "react";

import { GlobalStyle } from "./src/assets/styles/globalStyle";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </>
  );
};

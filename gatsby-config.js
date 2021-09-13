require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Juiczing site`,
    description: `You've found the best juiczing site in the world`,
    author: `@gabormeresz`,
    siteUrl: `https://juiczing.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Nunito",
              variants: ["300", "400", "700", "800"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juiczing site for a healthy life`,
        short_name: `Juiczing`,
        description: `You've found the best juiczing site in the world`,
        start_url: `/`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#adcb40`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
        theme_color_in_head: false,
      },
    },
  ],
};

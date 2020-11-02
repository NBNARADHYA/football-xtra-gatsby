/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "footballXtraServer",
        fieldName: "footballXtraServer",
        url: "https://football-xtra.herokuapp.com/graphql",
      },
    },
  ],
}

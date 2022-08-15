module.exports = {
  siteMetadata: {
    title: `jewelry-brand-landing-page`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Three.js Editor",
        short_name: "3D Editor",
        start_url: "/",
        // background_color: "#6b37bf",
        // theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/favicon32.png" // This path is relative to the root of the site.
      }
    }
  ],
}

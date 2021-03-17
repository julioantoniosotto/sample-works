module.exports = {
  siteMetadata: {
    title: 'Get to know Julio App',
    description: 'A quick start guide for all things Julio',
    keywords: 'gatsby,theme,carbon,get,to,know',
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Get to know Julio App",
        icon: "src/images/favicon.svg",
        short_name: "Get to know Julio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    'gatsby-theme-carbon'
  ],
};

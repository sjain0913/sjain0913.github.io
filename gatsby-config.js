module.exports = {
  siteMetadata: {
    title: 'Saumya Jain | Personal Website',
    author: 'Saumya Jain',
    description: 'My personal portfolio to showcase my experiences!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
  ],
}

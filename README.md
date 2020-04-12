# Gatsby with WordPress

  This Project uses as a starter [gatsby-starter-wordpress](https://github.com/GatsbyCentral/gatsby-starter-wordpress)

  Description: [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpres) plugin is used as the data connector.

  Demo: https://tzvetan.netlify.com/

## Installation

  * gatsby new PROJECT_NAME https://github.com/tzetzo/devrix.git

  * cd PROJECT_NAME

  * create ".env" file in the root of your project, paste the following environment variable names & fill in the keys :
    GATSBY_GRAPHQL_IDE=playground
    WORDPRESS_CLIENT_ID=...
    WORDPRESS_CLIENT_SECRET=...
    WORDPRESS_PASSWORD=...
    WORDPRESS_USER=...

  * npm run develop

  * open your browser and load http://localhost:8000

  * To pull data into Gatsby from your Wordpress site:
    - Edit `gatsby-config.js`, change `baseUrl` to your WP site URL
    - Make sure you have at least 1 post and 1 page on your WordPress site
    - Make sure at least 1 post has at least 1 tag
  * Ensure the permalink structure in your WordPress installation is set to `Post Name` instead of the default `Plain`, or else the `gatsby-source-wordpress` plugin won't be able to communicate with WordPress

### Known Limitations

* The above starter is based on the [netlify starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which uses [bulma](https://bulma.io). This adds 150KB to every built page.
* Your WordPress site must have at least 1 post with 1 tag, or the starter will crash
* Nested pages / categories will not render with nested pages
  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma build would otherwise be ~170K which adds 170K to each of your built HTML pages. However, with purgecss this is reduced 90%.

## WordPress Setup

Check the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin for more information.

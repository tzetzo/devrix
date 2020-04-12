import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

const Category = props => {
  // console.log(
  //   `allWordpressPost call from category.js ${JSON.stringify(
  //     props.data.allWordpressPost,
  //     undefined,
  //     4
  //   )}`
  // )

  const { data, pageContext } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in the “${category}” category`

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Category

export const categoryQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      totalCount
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          author{
            name
            slug
          }
          excerpt
        }
      }
    }
  }
`

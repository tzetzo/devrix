import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

export default class Blog extends React.Component {
  render() {
    // console.log(
    //   `allWordpressPost call from blog.js ${JSON.stringify(
    //     this.props.data.allWordpressPost,
    //     undefined,
    //     4
    //   )}`
    // )

    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
      </Layout>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const blogQuery = graphql`
  query blogQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          author {
            name
            slug
          }
          excerpt
        }
      }
    }
  }
`

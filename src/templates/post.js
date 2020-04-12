import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

export const PostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1
              className="title is-size-2 has-text-weight-bold is-bold-light"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              <p>
                {date} - posted by{' '}
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
              </p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                        <Link to={`/categories/${category.slug}/`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag.slug}tag`}>
                        <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const Post = ({ data: { wordpressPost } }) => {
  //data is what comes from the graphql query below
  return (
    <Layout>
      <Helmet title={`${wordpressPost.title} | Blog`} />
      <PostTemplate
        content={wordpressPost.content}
        categories={wordpressPost.categories}
        tags={wordpressPost.tags}
        title={wordpressPost.title}
        date={wordpressPost.date}
        author={wordpressPost.author}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

// the $id is passed to the Template as query variable by Gatsby & the gatsby-node.js createPage context!
// the result from the following query is auto passed by Gatsby as props to our Component
export const postQuery = graphql`
  query PostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`

// removed as previously part of the above graphql request
// fragment PostFields on wordpress__POST {
//   id
//   slug
//   content
//   date(formatString: "MMMM DD, YYYY")
//   title
// }

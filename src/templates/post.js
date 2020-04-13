import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styles from './post.module.scss'

export const PostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
}) => {
  return (
    <section className={styles.post}>
      <h1 className="" dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p>
        {date} - posted by{' '}
        <Link to={`/author/${author.slug}`} className={styles.post__link}>{author.name}</Link>
      </p>
      {categories && categories.length ? (
        <div>
          <h4>Categories</h4>
          <ul className="">
            {categories.map(category => (
              <li key={`${category.slug}cat`}>
                <Link to={`/categories/${category.slug}/`} className={styles.post__link}>
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
          <ul className="">
            {tags.map(tag => (
              <li key={`${tag.slug}tag`}>
                <Link to={`/tags/${tag.slug}/`} className={styles.post__link}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const Post = ({ data: { wordpressPost, site } }) => {
  //data is what comes from the graphql query below
  return (
    <Layout>
      <Helmet title={`${wordpressPost.title} | ${site.siteMetadata.title}`} />
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
    site {
      siteMetadata {
        title
      }
    }
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

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './pagination.module.scss'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <nav className={styles.pagination} role="navigation">
      {previousPagePath && (
        <Link to={previousPagePath} rel="prev">
          Previous
        </Link>
      )}
      {!previousPagePath && (
        <div style={{ color: '#ff9933', cursor: 'not-allowed' }}>Previous</div>
      )}
      {nextPagePath && (
        <Link to={nextPagePath} rel="next">
          Next
        </Link>
      )}
      {!nextPagePath && (
        <div style={{ color: '#ff9933', cursor: 'not-allowed' }}>Next</div>
      )}
    </nav>
  )
}

export default Pagination

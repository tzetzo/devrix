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
        <div className="">
          {previousPagePath && (
            <div className="">
              <Link to={previousPagePath} rel="prev">
                Previous
              </Link>
            </div>
          )}
          {nextPagePath && (
            <div className="">
              <Link to={nextPagePath} rel="next">
                Next
              </Link>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Pagination

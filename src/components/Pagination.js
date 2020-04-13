import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
      <nav className="pagination" role="navigation">
        <div className="navbar navbar-menu">
          {previousPagePath && (
            <div className="navbar-item">
              <Link to={previousPagePath} rel="prev">
                Previous
              </Link>
            </div>
          )}
          {nextPagePath && (
            <div className="navbar-item">
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

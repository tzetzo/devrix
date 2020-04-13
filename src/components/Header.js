import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Gatsby & WordPress" style={{width: "9rem"}} />
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          {data.allWordpressPage.edges.map(edge => (
            <Link
              className="navbar-item"
              activeClassName="active-navbar-item"
              to={edge.node.slug}
              key={edge.node.slug}
            >
              {edge.node.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/tzetzo/devrix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header

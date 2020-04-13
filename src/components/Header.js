import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import styles from './header.module.scss'

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
    <nav className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <figure>
            <img src={logo} alt="Gatsby & WordPress" />
          </figure>
        </Link>
      </div>
      <div className={styles.header__pages}>
        {data.allWordpressPage.edges.map(edge => (
          <Link
            exact
            className={styles.header__pagesLink}
            activeClassName={styles.header__pagesActive}
            to={edge.node.slug}
            key={edge.node.slug}
          >
            {edge.node.title}
          </Link>
        ))}
      </div>
      <div className={styles.header__github}>
        <a
          href="https://github.com/tzetzo/devrix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img src={github} alt="Github" />
          </figure>
        </a>
      </div>
    </nav>
  )
}

export default Header

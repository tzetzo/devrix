import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from './page.module.scss'

export const PageTemplate = ({ title, content }) => {
  return (
    <section className={styles.page}>
      <h2 className={styles.page__heading}>{title}</h2>
      <div className={styles.page__content} dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data: { wordpressPage, site } }) => {
  //data is what comes from the graphql query below
  return (
    <Layout>
      <Helmet title={`${wordpressPage.title} | ${site.siteMetadata.title}`} />
      <PageTemplate
        title={wordpressPage.title}
        content={wordpressPage.content}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

// the $id is passed to the Template as query variable by Gatsby & the gatsby-node.js createPage context!
// the result from the following query is auto passed by Gatsby as props to our Component
export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`

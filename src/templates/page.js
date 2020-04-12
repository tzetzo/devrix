import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({data:{wordpressPage}}) => {
  //data is what comes from the graphql query below
  // console.log(`wordpressPage call from page.js ${JSON.stringify(wordpressPage, undefined, 4)}`);

  // const { wordpressPage: page } = props.data

  return (
    <Layout>
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
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`

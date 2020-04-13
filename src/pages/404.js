import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        fontSize: '2rem',
        color: 'orangered',
        display: 'grid',
        gridTemplateRows: 'repeat(3,1fr)',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <p>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: "blueviolet"
          }}
        >
          Head home
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

import React from 'react'
import Helmet from 'react-helmet'
import Footer from './Footer'

import Header from './Header'
import './all.scss'
import styles from './layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.layout__content}>
      <Helmet title="Gatsby & WordPress" />
      <Header />
      <div className={styles.layout__children}>{children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout

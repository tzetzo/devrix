import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './postlist.module.scss'

export default class PostList extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className={styles.postlist}>
        <h1 className={styles.postlist__heading}>{title}</h1>

        <div className={styles.postlist__list}>
          {posts.map(({ node: post }) => (
            <div className={styles.postlist__listItem} key={post.id}>
              <p>
                <Link
                  to={post.slug}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <small>
                  {post.date} - posted by{' '}
                  <Link to={`/author/${post.author.slug}`}>
                    {post.author.name}
                  </Link>
                </small>
              </p>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                  }}
                />
                <Link to={post.slug}>Keep Reading →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

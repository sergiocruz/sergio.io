import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classnames from 'classnames'

import styles from '../../styles/components/article-list.module.scss'

class BlogArticles extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        excerpt: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
  }

  render() {
    const { articles } = this.props

    return (
      <div className="pt-4 pb-0 pt-lg-5 pb-lg-5 bg-blue text-white">
        <div className="container mb-5">
          <h2>
            <span className="bg-pink text-white px-1 rounded">
              Blog Articles
            </span>
          </h2>
          <p className="lead">
            Explore some articles I wrote along the course of my career.
          </p>
        </div>

        <div>
          <ul className="list-unstyled mb-0">
            {articles.map((article, i) => (
              <li key={i} className={classnames(styles.articleItem, 'py-4')}>
                <div className="container">
                  <h6>
                    <Link to={article.frontmatter.path} className="text-white">
                      {article.frontmatter.title}
                    </Link>
                  </h6>
                  <p>{article.excerpt}</p>
                  <Link
                    to={article.frontmatter.path}
                    className="btn btn-sm btn-outline-light extra-rounded"
                  >
                    Read Article
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogArticles

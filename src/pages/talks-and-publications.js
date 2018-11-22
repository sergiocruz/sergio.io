import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styles from '../styles/pages/talks-and-publications.module.scss'
import articles from '../styles/components/article-list.module.scss'

class TalksAndPublications extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allDataJson: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              talksAndPublications: PropTypes.shape({
                talks: PropTypes.arrayOf(
                  PropTypes.shape({
                    thumbnail: PropTypes.object.isRequired,
                    title: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                    when: PropTypes.string.isRequired,
                    where: PropTypes.string.isRequired,
                  })
                ).isRequired,
                publications: PropTypes.arrayOf(
                  PropTypes.shape({
                    excerpt: PropTypes.string.isRequired,
                    publication: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                    when: PropTypes.string.isRequired,
                  })
                ).isRequired,
              }),
            }).isRequired,
          })
        ).isRequired,
      }),
    }).isRequired,
  }

  getTalksAndPublications() {
    const { data } = this.props

    return data.allDataJson.edges
      .filter(edge => edge.node.talksAndPublications)
      .map(edge => edge.node.talksAndPublications)
      .reduce(talksAndPublications => talksAndPublications)
  }

  render() {
    const { talks, publications } = this.getTalksAndPublications()

    return (
      <Layout>
        <Helmet>
          <title>Talks, courses, and articles presented by Sergio Cruz</title>
          <meta
            name="description"
            content="Sergio has done several technical talks around the world. He also regularly publishes articles on various publications, participates in podcasts, interviews, etc."
          />
          <meta
            name="og:image"
            content="https://sergio.io/img/sergiocruz-speaker.jpg"
          />
          <meta
            name="og:tite"
            content="Talks, courses, and articles presented by Sergio Cruz"
          />
        </Helmet>

        <div className="bg-gray-200 text-dark py-4 border-bottom">
          <div className="container">
            <h1 className="m-0">Talks &amp; Publications</h1>
          </div>
        </div>

        <div className="bg-light text-dark py-4">
          <div className="container pt-4 pb-0 mb-0">
            <h2>
              <span className="bg-pink text-white px-1 rounded">Videos</span>
            </h2>
            <p className="lead">
              Videos of my conference talks, interviews, webinars, etc.
            </p>

            <div className="row">
              {talks.map((talk, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div
                    className={classnames(
                      styles.talkCard,
                      'card h-100 shadow-sm shadow--hover overflow-hidden'
                    )}
                  >
                    <div className="position-relative overflow-hidden">
                      <OutboundLink
                        href={talk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block card-img-top"
                      >
                        <FontAwesomeIcon
                          icon={['fas', 'play-circle']}
                          className="card-img-top-icon"
                          style={{ maxWidth: '70px' }}
                        />
                        <Img
                          fluid={talk.thumbnail.childImageSharp.fluid}
                          className="rounded-top"
                          alt={talk.title}
                        />
                      </OutboundLink>
                    </div>

                    <div className="card-body">
                      <p className="card-text font-size-sm">
                        <small className="text-muted">{talk.where}</small>
                        <br />
                        <OutboundLink
                          href={talk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 font-weight-600"
                        >
                          {talk.title}
                        </OutboundLink>
                      </p>
                    </div>

                    <div className="card-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{talk.when}</small>
                        <OutboundLink
                          href={talk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-blue"
                        >
                          Watch Now
                          <FontAwesomeIcon
                            icon={['fas', 'play-circle']}
                            className="ml-2"
                            style={{ maxWidth: '15px' }}
                          />
                        </OutboundLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue text-light">
          <div className="container py-5 pb-0">
            <h2>
              <span className="bg-pink text-white px-1 rounded">
                Publications
              </span>
            </h2>
            <p className="lead mb-0">
              See some of my work that has been published around the web.
            </p>
          </div>

          <div>
            <ul className="list-unstyled mb-0">
              {publications.map((publication, i) => (
                <li
                  className={classnames(articles.articleItem, 'py-4')}
                  key={i}
                >
                  <div className="container">
                    <h4 className="mb-0">
                      <OutboundLink
                        href={publication.url}
                        className="text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {publication.title}
                      </OutboundLink>
                    </h4>
                    <p className="text-white my-0">
                      <small>
                        {publication.when} - {publication.publication}
                      </small>
                    </p>
                    <p className="mt-2">{publication.excerpt}</p>

                    <OutboundLink
                      href={publication.url}
                      className="btn btn-sm btn-outline-light extra-rounded"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Check it out
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-circle-right']}
                        className="ml-2"
                        style={{ maxWidth: '15px' }}
                      />
                    </OutboundLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-700 text-light font-size-sm">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-8">
                <h2>Curious about my work experience?</h2>
                <p className="mb-lg-0">
                  See what I've been up to professionally over the past few
                  years.
                </p>
              </div>
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <Link
                  to="/resume"
                  className="btn btn-outline-light extra-rounded px-4"
                >
                  View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TalksAndPublications

export const pageQuery = graphql`
  {
    allDataJson {
      edges {
        node {
          talksAndPublications {
            talks {
              title
              when
              where
              url
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            publications {
              title
              excerpt
              publication
              when
              url
            }
          }
        }
      }
    }
  }
`

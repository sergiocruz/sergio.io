import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, withPrefix } from 'gatsby'
import classnames from 'classnames'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/pages/resume.module.scss'
import articles from '../styles/components/article-list.module.scss'

class Resume extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allDataJson: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              resume: PropTypes.shape({
                experience: PropTypes.arrayOf(
                  PropTypes.shape({
                    company: PropTypes.string.isRequired,
                    positions: PropTypes.arrayOf(
                      PropTypes.shape({
                        title: PropTypes.string.isRequired,
                        when: PropTypes.string.isRequired,
                        activity: PropTypes.arrayOf(PropTypes.string)
                          .isRequired,
                      })
                    ).isRequired,
                  })
                ).isRequired,
                accomplishments: PropTypes.arrayOf(
                  PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    position: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                  })
                ).isRequired,
                education: PropTypes.arrayOf(
                  PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    when: PropTypes.string.isRequired,
                    degree: PropTypes.string.isRequired,
                  })
                ).isRequired,
              }),
            }).isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    isHidingPositions: true,
  }

  getResume() {
    const { isHidingPositions } = this.state
    const { data } = this.props
    const dataResume = data.allDataJson.edges
      .filter(edge => edge.node.resume)
      .map(edge => edge.node.resume)
      .reduce(resume => ({ ...resume }))

    const resume = {
      ...dataResume,
    }

    if (isHidingPositions) {
      resume.experience = resume.experience.slice(0, 3)
    }

    return resume
  }

  handleToggleHidingPositions = () => {
    this.setState(state => ({
      isHidingPositions: !state.isHidingPositions,
    }))
  }

  render() {
    const { isHidingPositions } = this.state
    const { accomplishments, education, experience } = this.getResume()

    return (
      <Layout>
        <Helmet>
          <title>
            Resume of Sergio Cruz, a Software Engineer in Nashville, TN
          </title>
          <meta
            name="description"
            content="Sergio Cruz has over a decade of demonstrated experience. Sergio has extensive experience with JavaScript, both on client and server-side but has used other languages as well."
          />
          <meta
            name="og:image"
            content="https://sergio.io/img/sergiocruz-speaker.jpg"
          />
          <meta
            name="og:tite"
            content="Work Experience of Sergio Cruz, a software engineer in Nashville, TN"
          />
        </Helmet>

        <div className="bg-gray-200 text-dark py-4 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-left">
                <h1 className="mb-3 mb-lg-0">Sergio's Resume</h1>
              </div>
              <div className="col-lg-5">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                  <OutboundLink
                    href={withPrefix('downloads/cruzresume.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-primary extra-rounded px-3 py-2 mr-2"
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'file-pdf']}
                      className="mr-2"
                      style={{ maxWidth: '15px' }}
                    />
                    Download PDF
                  </OutboundLink>

                  <OutboundLink
                    href={withPrefix('downloads/cruzresume.docx')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-primary extra-rounded px-3 py-2"
                  >
                    <FontAwesomeIcon
                      icon={['fas', 'file-word']}
                      className="mr-2"
                      style={{ maxWidth: '15px' }}
                    />
                    Download Word
                  </OutboundLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light pt-4 pt-lg-5 pb-3 pb-lg-4">
          <div className="container pb-2 mb-0">
            <h2>
              <span className="bg-pink text-white px-1 rounded">
                Work Experience
              </span>
            </h2>
            <p className="lead">An overview of my career trajectory so far.</p>
          </div>

          <ul className="list-unstyled my-0 font-size-sm">
            {experience.map(({ company, positions }, i) => (
              <li
                className={classnames(articles.articleItem, {
                  'pt-4': i !== 0,
                  'pb-3': true,
                })}
                key={i}
              >
                <div className="container">
                  <h4>{company}</h4>
                  {positions.map((position, i) => (
                    <div key={i}>
                      <h5>
                        {position.title}{' '}
                        <small className="d-block d-lg-inline">
                          {position.when}
                        </small>
                      </h5>
                      <ul className="text-gray-600 mb-3">
                        {position.activity.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div
            className={classnames('text-center pb-4', {
              [styles.seeall]: isHidingPositions,
              'mt-4': !isHidingPositions,
            })}
          >
            <button
              className="btn btn-sm btn-outline-pink extra-rounded"
              onClick={this.handleToggleHidingPositions}
            >
              {isHidingPositions ? 'See all positions' : 'Hide older positions'}
            </button>
          </div>
        </div>

        <div className="bg-blue text-light font-size-sm pt-4 pt-lg-5 pb-3 pb-lg-4">
          <div className="container pb-4 pb-lg-5">
            <h2>
              <span className="bg-pink text-white px-1 rounded">
                Other Accomplishments
              </span>
            </h2>
            <p className="lead mb-0">What I do during my spare time.</p>
          </div>

          <div>
            <ul className="list-unstyled mb-0">
              {accomplishments.map((accomplishment, i) => (
                <li
                  className={classnames(articles.articleItem, 'py-4')}
                  key={i}
                >
                  <div className="container">
                    <h4>{accomplishment.name}</h4>
                    <h5>
                      {accomplishment.position}{' '}
                      <small class="d-block d-lg-inline">
                        {accomplishment.when}
                      </small>
                    </h5>
                    <p>{accomplishment.description}</p>
                    <a
                      href={accomplishment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light extra-rounded"
                    >
                      Learn more
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-circle-right']}
                        className="ml-2"
                      />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-light text-dark font-size-sm pt-4 pb-2 pt-lg-5 pb-lg-4">
          <div className="container pb-0">
            <h2>
              <span className="bg-pink text-white px-1 rounded">Education</span>
            </h2>
            <p className="lead">
              College education is important!{' '}
              <small className="text-gray-200 d-block d-lg-inline">
                (Maybe I should finish it some day)
              </small>
            </p>
          </div>

          <div>
            <ul className="list-unstyled mb-0">
              {education.map((school, i) => (
                <li
                  className={classnames(articles.articleItem, 'py-3')}
                  key={i}
                >
                  <div className="container">
                    <h4>
                      {school.name} ({school.when})
                    </h4>
                    <p>{school.degree}</p>
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
                <h2>Want to see some of my work in action?</h2>
                <p className="mb-lg-0">
                  Watch my talks, or read articles I have written for various
                  publications.
                </p>
              </div>
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <Link
                  to="/talks-and-publications"
                  className="btn btn-outline-light extra-rounded px-4"
                >
                  View Talks & Publications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Resume

export const pageQuery = graphql`
  {
    allDataJson {
      edges {
        node {
          resume {
            experience {
              company
              positions {
                title
                when
                activity
              }
            }
            accomplishments {
              name
              position
              when
              description
              url
            }
            education {
              name
              when
              degree
            }
          }
        }
      }
    }
  }
`

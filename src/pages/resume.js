import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import classnames from 'classnames';

import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/pages/resume.module.scss'
import articles from '../styles/components/article-list.module.scss'

class Resume extends Component {
  
  static propTypes = {
    data: PropTypes.shape({
      dataJson: PropTypes.shape({
        resume: PropTypes.shape({
          experience: PropTypes.arrayOf(PropTypes.shape({
            company: PropTypes.string.isRequired,
            positions: PropTypes.arrayOf(PropTypes.shape({
              title: PropTypes.string.isRequired,
              when: PropTypes.string.isRequired,
              activity: PropTypes.arrayOf(PropTypes.string).isRequired,
            })).isRequired,
          })).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }

  state = {
    isHidingPositions: true,
  }

  getExperience() {
    let { data: { dataJson: { resume: { experience } } } } = this.props
    const { isHidingPositions } = this.state

    if (isHidingPositions) {
      experience = experience.slice(0, 5)
    }

    return experience
  }

  handleToggleHidingPositions = () => {
    this.setState((state) => ({
      isHidingPositions: !state.isHidingPositions,
    }))
  }

  render() {
    const experience = this.getExperience()
    const { isHidingPositions } = this.state

    return (
      <Layout>
        <div className="bg-gray-200 text-dark py-4 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center text-lg-left">
                <h1 className="m-0">Sergio's Resume</h1>                
              </div>
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <a href="/downloads/cruzresume.docx" className="btn btn-outline-blue extra-rounded px-3 mt-4 mt-lg-0">
                  <FontAwesomeIcon icon={['fas', 'file-word']} className="mr-2" />
                  Download Word Version
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light">
          <div className="container pt-4 pb-0 mb-0">
            <h2><span className="bg-pink text-white px-1 rounded">Work Experience</span></h2>
            <p className="lead">An overview of my career trajectory so far.</p>
          </div>
          
          <ul className="list-unstyled my-0 font-size-sm">
            {experience.map(({ company, positions }, i) => (
              <li className={classnames(articles.articleItem, {
                'pt-4': (i !== 0),
                'pb-3': true,
              })} key={i}>
                <div className="container">
                  <h4>{company}</h4>
                  {positions.map((position, i) => (
                    <div key={i}>
                      <h5>{position.title} <small className="d-block d-lg-inline">{position.when}</small></h5>
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

          <div className={classnames('text-center pb-4', {
            [styles.seeall]: isHidingPositions,
            'mt-4': !isHidingPositions,
          })}>
            <button className="btn btn-sm btn-outline-pink extra-rounded" onClick={this.handleToggleHidingPositions}>
              {(isHidingPositions)
                ? 'See all positions'
                : 'Hide older positions'
              }
              
            </button>
          </div>
        </div>


        <div className="bg-blue text-light font-size-sm">
          <div className="container py-4">
            <h2><span className="bg-pink text-white px-1 rounded">Other Accomplishments</span></h2>
            <p className="lead">What I do during my spare time.</p>
          </div>

          <div>
            <ul className="list-unstyled mb-0">
              <li className={classnames(articles.articleItem, 'py-4')}>
                <div className="container">
                  <h4>Orlando Devs, Inc.</h4>
                  <h5>President</h5>
                  <p>Nonprofit focused on improving the qualitfy of life of Software Professionals in Central Florida.</p>
                  <a href="https://orlandodevs.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light extra-rounded">Learn more</a>
                </div>
              </li>

              <li className={classnames(articles.articleItem, 'py-4')}>
                <div className="container">
                  <h4>OrlandoJS</h4>
                  <h5>Co-organizer</h5>
                  <p>Tech meetup in Orlando that covers all things JavaScript and meets on a monthly basis.</p>
                  <a href="https://meetup.com/OrlandoJS" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light extra-rounded">Learn more</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-light text-dark font-size-sm">
          <div className="container pt-4 pb-0">
            <h2><span className="bg-pink text-white px-1 rounded">Education</span></h2>
            <p className="lead">College education is important! <small className="text-gray-200">(Maybe I should finish it some day)</small></p>
          </div>

          <div>
            <ul className="list-unstyled mb-0">
              <li className={classnames(articles.articleItem, 'py-3')}>
                <div className="container">
                  <h4>University of Central Florida (2013-2015)</h4>
                  <p>Bachelor's in Computer Science <em>(Incomplete)</em></p>
                </div>
              </li>

              <li className={classnames(articles.articleItem, 'py-3')}>
                <div className="container">
                  <h4>Valencia Community College (2010-2013)</h4>
                  <p>Associate of Arts</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green text-dark font-size-sm">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-8">
                <h2>Want to see some of my work in action?</h2>
                <p>Watch my talks, or read articles I have written for various publications.</p>
              </div>
              <div className="col-lg-4 align-self-center text-center text-lg-right">
                <Link to="/talks-and-publications" className="btn btn-outline-blue extra-rounded px-4">View Talks & Publications</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Resume;

export const pageQuery = graphql`
  {
    dataJson {
      resume {
        experience {
          company
          positions {
            title
            when
            activity
          }
        }
      }
    }
  }
`

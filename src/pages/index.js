import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import styles from '../styles/pages/home.module.scss'

const IndexPage = () => (
  <Layout header={false}>
    <div className={classnames(styles.hero, 'd-flex align-items-center justify-content-center')}>
      <div className={styles.heroContent}>

        <div className="container p-3">
          <div className="d-flex align-items-center justify-content-center text-center">
            <div>
              <h1 className={classnames(styles.heroName, 'mb-3 d-flex align-items-center justify-content-center')}>
                Sergio Cruz
                <img src="https://pbs.twimg.com/profile_images/702647112815652866/AJi5Gajh_400x400.jpg" className={classnames(styles.heroAvatar, 'rounded-circle ml-4 my-2')} alt="Sergio's avatar" />
              </h1>

              <div className={classnames(styles.heroQualities, 'px-2 py-1 extra-rounded d-flex align-items-center justify-content-center')}>
                <span className="list-inline-item mb-0">Engineer</span>
                <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item mb-0')}>⋆</span>
                <span className="list-inline-item mb-0">Speaker</span>
                <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item mb-0')}>⋆</span>
                <span className="list-inline-item mb-0">Mentor</span>
              </div>

              <div className={classnames(styles.socialMedia, 'mt-3')}>
                <a href="https://twitter.com/hashtagserg" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                  <span>Twitter</span>
                </a>

                <a href="https://github.com/sergiocruz" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                  <span>GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/sergiorlcruz" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  <span>LinkedIn</span>
                </a>

                <a href="mailto:hello@sergiocruz.me" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                  <span>Email</span>
                </a>
              </div>

              <div className="mt-3">
                <button className="btn btn-outline-light extra-rounded px-4">Download Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-4 bg-gray-100 text-gray-800">
      <div className="container">
        <h2>
          <span className="bg-green text-dark px-1">Sergio Cruz</span>
        </h2>
        <p className="lead">Full stack developer in Orlando, FL.</p>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

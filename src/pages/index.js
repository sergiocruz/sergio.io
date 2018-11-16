import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import Header from '../components/header'
import styles from '../styles/pages/home.module.scss'

const IndexPage = () => (
  <Layout header={false}>
    <div className={styles.hero}>
      <div className={styles.heroContent}>

        <Header />

        <div className="container p-3">
          <div className="d-flex align-items-center justify-content-center text-center">
            <div>
              <h1 className={classnames(styles.heroName, 'mb-3')}>Sergio Cruz</h1>

              <div className={classnames(styles.heroQualities, 'px-2 py-1 rounded d-flex align-items-center justify-content-center')}>
                <span className="list-inline-item mb-0">Engineer</span>
                <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item mb-0')}>⋆</span>
                <span className="list-inline-item mb-0">Speaker</span>
                <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item mb-0')}>⋆</span>
                <span className="list-inline-item mb-0">Mentor</span>
              </div>

              <div className={classnames(styles.socialMedia, 'mt-3')}>
                <a href="https://twitter.com/hashtagserg" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                  <span>Twitter</span>
                </a>

                <a href="https://github.com/sergiocruz" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                  <span>GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/sergiorlcruz" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  <span>LinkedIn</span>
                </a>

                <a href="mailto:hello@sergiocruz.me" target="_blank">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage

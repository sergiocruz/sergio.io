import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import styles from '../styles/pages/home.module.scss'
import speakerImg from '../images/sergiocruz-speaker.jpg'

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

    <div className="py-4 bg-gray-100">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2><span className="bg-green text-dark px-1 rounded">About Sergio</span></h2>
            <p className="lead">Full stack developer in Orlando, FL.</p>

            <p>
              Hey there <span role="img" aria-label="Waving hand">👋</span>, thanks for dropping by!
              {' '}
              I’m a software engineer who exuberates passion for the art of writing code.
              {' '}
              I'm a big fan of shipping beautiful experiences and observing how they impact the people using them.
            </p>

            <p>
              I also enjoy helping fellow developers learn new technologies.
              {' '}
              That’s why I <a href="https://www.meetup.com/OrlandoDevs" target="_blank" rel="noopener noreferrer" className="a-underlined">organize meetups</a>, <a href="https://youtu.be/WHMyaTy7PME" target="_blank" rel="noopener noreferrer" className="a-underlined">speak at conferences</a>, and even <a href="https://www.pluralsight.com/courses/code-school-powering-up-with-react" target="_blank" rel="noopener noreferrer" className="a-underlined">teach online courses</a> occasionally.
              {' '}
              To further augment my desire to help other engineers succeed, I have most recently taken on management and leadership positions.
            </p>

            <p>
              Please feel free to contact me at any time with questions:<br />
              <strong>E.</strong> hello [at] sergiocruz.me<br />
              <strong>P.</strong> (407) six-nine-four 8175
            </p>
          </div>
          <div className="col-md-4">
            <img src={speakerImg} className="img-fluid rounded" alt="Sergio speaking at ng-conf 2018" />
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default IndexPage

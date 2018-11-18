import React, { Component } from 'react';
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialMedia from '../socialmedia.component'
import styles from '../../styles/pages/home.module.scss'

class Hero extends Component {
  render() {
    return (
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
                  <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item my-0 ml-2 mr-3')}>
                    <FontAwesomeIcon icon={['fas', 'star']} />
                  </span>
                  <span className="list-inline-item my-0">Speaker</span>
                  <span className={classnames(styles.heroQualitiesSeparator, 'list-inline-item my-0 ml-2 mr-3')}>
                    <FontAwesomeIcon icon={['fas', 'star']} />
                  </span>
                  <span className="list-inline-item mb-0">Mentor</span>
                </div>

                <SocialMedia />

                <div className="mt-3">
                  <button className="btn btn-outline-light extra-rounded px-4">View Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

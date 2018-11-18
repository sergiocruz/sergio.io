import React from 'react';
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/socialmedia.module.scss'

const SocialMedia = () => (
  <div className={classnames(styles.socialmedia, 'mt-3')}>
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
)

export default SocialMedia

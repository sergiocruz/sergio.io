import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from '../styles/components/socialmedia.module.scss'

const SocialMedia = () => (
  <div className={classnames(styles.socialmedia, 'mt-3')}>
    <OutboundLink
      href="https://twitter.com/hashtagserg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'twitter']} />
      <span>Twitter</span>
    </OutboundLink>

    <OutboundLink
      href="https://github.com/sergiocruz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
      <span>GitHub</span>
    </OutboundLink>

    <OutboundLink
      href="https://www.linkedin.com/in/sergiorlcruz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
      <span>LinkedIn</span>
    </OutboundLink>

    <OutboundLink
      href="mailto:hello@sergiocruz.me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fas', 'envelope']} />
      <span>Email</span>
    </OutboundLink>
  </div>
)

export default SocialMedia

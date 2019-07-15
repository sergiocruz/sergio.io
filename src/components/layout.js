import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronCircleRight,
  faEnvelope,
  faFilePdf,
  faFileWord,
  faPlayCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import Header from './header'
import '../styles/app.scss'
import '../styles/components/layout.module.scss'
import Footer from './footer'

library.add(
  faChevronCircleRight,
  faEnvelope,
  faFilePdf,
  faFileWord,
  faGithub,
  faLinkedin,
  faPlayCircle,
  faStar,
  faTwitter
)

const Layout = ({ children, header = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        {header && <Header />}

        <div>{children}</div>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

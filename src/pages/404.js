import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const NotFoundPage = () => (
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
        <h1 className="m-0">Not found</h1>
      </div>
    </div>

    <div className="bg-light text-dark py-4">
      <div className="container pt-4 pb-0 mb-0">
        <p className="lead">
          You reached a page that doesn&#39;t exist... the sadness{' '}
          <span role="img" aria-label="Crying emoji">
            😢
          </span>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

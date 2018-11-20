import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { excerpt, frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} - Sergio Cruz Blog</title>
        <meta name="description" content={excerpt} />
        <meta name="og:tite" content={frontmatter.title} />
      </Helmet>

      <div className="bg-gray-200 text-dark py-3">
        <div className="container">
          <h1>{frontmatter.title}</h1>
        </div>
      </div>

      <div className="bg-light text-dark py-3">
        <div className="container">
          <p>Published <date>{frontmatter.date}</date></p>
          <div
            className="body-content font-size-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
      
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

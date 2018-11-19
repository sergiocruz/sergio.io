import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

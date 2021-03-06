import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Hero from '../components/home/hero.component'
import Introduction from '../components/home/introduction.component'
import BlogArticles from '../components/home/blog-articles.component'

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  const articles = edges.map(edge => edge.node)

  return (
    <Layout header={false}>
      <Helmet>
        <title>
          Sergio Cruz, full stack application developer in Nashville, TN
        </title>
        <meta
          name="description"
          content="Software engineer in Nashville, TN with over a decade of experience. Sergio regularly organizes tech events, speaks at conferences, and teaches online courses."
        />
        <meta
          name="og:image"
          content="https://sergio.io/img/sergiocruz-speaker.jpg"
        />
        <meta name="og:tite" content="Sergio Cruz: Software Engineer" />
      </Helmet>
      <Hero />
      <Introduction />
      <BlogArticles articles={articles} />
    </Layout>
  )
}

export default IndexPage

/**
{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
 */

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

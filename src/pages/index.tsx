import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link, useStaticQuery, graphql } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        nodes {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>Welcome to {data.site.siteMetadata.title}!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/about">Link to About page</Link>
      {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

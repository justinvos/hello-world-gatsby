import * as React from 'react';
import type { HeadFC, PageProps } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import { Layout } from '../../components/layout';


const BlogPost = (props: PageProps) => {
  console.log('BlogPost', props);

  const data = useStaticQuery(graphql`
    query ($id: String) {
      mdx(id: { eq: $id }) {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}.</h1>
    </Layout>
  )
}
export const Head: HeadFC = () => <title>Home Page</title>


export default BlogPost
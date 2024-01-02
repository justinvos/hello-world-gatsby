import * as React from 'react';
import type { HeadFC, PageProps } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';


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
    <h1>{data.mdx.frontmatter.title}.</h1>
  )
}
export const Head: HeadFC = () => <title>Home Page</title>


export default BlogPost
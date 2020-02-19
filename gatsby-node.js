const path = require('path');


// this only runs when you restart the server
// *******THIS WAS USED TO CREATE SLUGS FOR MD FILES*******
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   // if it is a markdown file...
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md');
//     createNodeField({
//       node,
//       name: 'slug',
//       value: `${slug}`
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 1. get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js');
  // 2. get markdown data: UPDATED TO CONTENTFUL DATA
  // this is different from the graphql used in the components
  // it returns a promise
  let response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // console.log('_______________________', JSON.stringify(response, null, 4));
  // 3. create new pages
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node;
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug
      }
    })
  })
}
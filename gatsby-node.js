const path = require('path');


// this only runs when you restart the server
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // if it is a markdown file...
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: `${slug}`
    })
  }

}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // 1. get path to template
  const blogTemplate = path.resolve('./src/templates/blog.js');
  // 2. get markdown data
  // this is different from the graphql used in the components
  // it returns a promise
  let response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log('_______________________', JSON.stringify(response, null, 4));
  // 3. create new pages
  console.log('_______________________', response.data.allMarkdownRemark);
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
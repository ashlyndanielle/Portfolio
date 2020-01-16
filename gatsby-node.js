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
      value: `/blog/${slug}`
    })
  }

}
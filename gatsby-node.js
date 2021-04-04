const path = require(`path`);
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project.js`);

  const result = await graphql(`
  query {
    drupal {
      projects(limit: 1000) {
        items {
          slug
        }
      }
    }
  }
  `)
  result.data.drupal.projects.items.forEach(edge => {
    createPage({
      path: `${edge.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.slug,
      },
    })
  })
}

exports.createResolvers = ({actions,cache,createNodeId,createResolvers,store,reporter,}) => {
  const { createNode } = actions
  createResolvers({
    DRUPAL_Project: {
      listingImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.listingImage,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
      decorativeImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.decorativeImage,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
      projectImageFiles: {
        type: `[File]`,
        resolve(source, args, context, info) {
          console.log(source);
          const res = source.projectImages && source.projectImages.map(el => {
            return createRemoteFileNode({
              url: el.url,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            });
          }) || [];
          return res;
        },
      },
    },
  })
}

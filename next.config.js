
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['jEbG6thwEnn7y67WzP9nfB'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
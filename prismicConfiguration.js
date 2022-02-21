// -- Prismic Repo Name
export const repoName = process.env.PRISMIC_REPOSITORY_NAME;

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_API_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'project') {
    return `/${doc.uid}`;
  }
  return '/';
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      type: 'project',
      path: '/:uid',
    },
  ],
};

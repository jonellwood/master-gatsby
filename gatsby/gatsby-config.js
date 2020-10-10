import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteURL: 'https://gatsby.pizza',
    description: `Time to feed the baby,`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'eeu5nfk3',
        dataset: 'production',
        watchmode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};

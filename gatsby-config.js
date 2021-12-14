module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'pomodoro-app',
  },
  pathPrefix: '/pomodoro',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@icons': 'src/icons',
          '@core-components': 'src/components/core',
          '@hooks': 'src/hooks',
          '@state': 'src/state',
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
};

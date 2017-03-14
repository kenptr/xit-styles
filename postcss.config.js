module.exports = {
  use: [
    'postcss-smart-import',
    'postcss-custom-media',
    'postcss-custom-properties',
    'postcss-calc',
    'postcss-color-function',
    'postcss-discard-comments',
    'autoprefixer',
  ],
  'postcss-smart-import': {
    onImport: sources => {
      global.watchCSS(sources);
    },
  },
};

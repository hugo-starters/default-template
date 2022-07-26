const autoprefixer = require('autoprefixer')();

module.exports = {
  plugins: [
    // the following runs when env is NOT development
    ...process.env.HUGO_ENVIRONMENT === 'production'
    ? [autoprefixer] // production plugins
    : [], // development plugins
  ],
}

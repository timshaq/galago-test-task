module.exports = {
  transpileDependencies: ['vuejs-datepicker'],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-gh-pages/'
    : '/'
}

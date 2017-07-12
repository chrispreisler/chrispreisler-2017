module.exports = {
  html        : false,
  images      : false,
  fonts       : false,
  static      : false,
  svgSprite   : false,
  ghPages     : false,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    },
    publicPath: '/assets/public/javascripts/'
  },

  browserSync: {

    /*server: {
      // should match `dest` in
      // path-config.json
      baseDir: './'
    },*/
    proxy: 'http://localhost:8888/',
    files: ["./site/**/*.{php}"],
    //host: '192.168.2.114'
    host: '192.168.101.36'
  },

  production: {
    rev: false
  }
}

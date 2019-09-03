module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
      },
    },
    stylesheets: {
      joinTo: 'styles.css',
    },
  },
  modules: {
    autoRequire: {
      'app.js': [ 'initialize' ],
    },
  },
  server: {
    port: 8080,
    stripSlashes: true,
  },
};

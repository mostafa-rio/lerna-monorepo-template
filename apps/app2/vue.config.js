const path = require("path");
const sharedNodeModules = path.resolve(__dirname, "../shared/node_modules");

const sharedSrc = path.resolve(__dirname, "../shared/src");

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [sharedNodeModules], // this will allow `fico` module to import NPM packages from `shared`
      alias: {
        "@shared": sharedSrc,
      },
    },
  },
};

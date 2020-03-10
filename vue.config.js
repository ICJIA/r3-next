const path = require("path");
const Mode = require("./lib/frontmatter-markdown-loader/mode");
const markdownIt = require("markdown-it");
const markdownItNamedHeaders = require("./lib/markdown-it-named-headers-fork");
const markdownItAttrs = require("markdown-it-attrs");
// eslint-disable-next-line no-unused-vars
const appConfig = require("./src/config.json");

module.exports = {
  publicPath:
    process.env.NODE_ENV === `production` ? appConfig.publicPath : "/",
  //publicPath: "/",
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    moment: {
      locales: ["en"]
    }
  },
  chainWebpack: config => {
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use(path.resolve("./lib/frontmatter-markdown-loader"))
      .loader(path.resolve("./lib/frontmatter-markdown-loader"))
      // eslint-disable-next-line no-unused-vars
      .tap(options => {
        return {
          mode: [Mode.VUE_COMPONENT],
          publicPath:
            process.env.NODE_ENV === `production` ? appConfig.publicPath : "/",
          vue: {
            root: "markdown-body"
          },
          markdownIt: markdownIt(appConfig.markdownItOptions)
            .use(markdownItNamedHeaders, {
              namespace: `${appConfig.namespace}`
            })
            .use(markdownItAttrs)
        };
      });
  }
};

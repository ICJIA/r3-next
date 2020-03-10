const config = require("./src/config.json");
const fs = require("fs");
const sm = require("sitemap");
const utils = require("./lib/utils");

const markdownRoutes = require("./src/router/markdownRoutes.json");
const manualRoutes = require("./src/router/manualRoutes.js");
const fallbackRoutes = require("./src/router/fallbackRoutes.js");
const routes = [...manualRoutes, ...markdownRoutes, ...fallbackRoutes];

let urls = routes.map(route => {
  if (route.meta && route.meta.showInSitemap) {
    let obj = {
      url: `${config.clientBase}${config.publicPath}${route.path}`,
      changefreq: "weekly",
      priority: 0.5,
      lastmod: route.meta.updatedAt || new Date().toJSON().substring(0, 10)
    };
    return obj;
  }
});

urls = utils.filterUndefined(urls);

let sitemap = sm.createSitemap({
  hostname: `${config.clientBase}${config.publicPath}`,
  cacheTime: 600000, //600 sec (10 min) cache purge period
  urls
});

fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
console.log(`Created: ./public/sitemap.xml`);

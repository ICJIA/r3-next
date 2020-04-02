const fs = require("fs");
const base = "public/markdown";
const slugs = require("slugs");
const matter = require("gray-matter");
const toc = require("./lib/markdown-toc-fork");
const utils = require("./lib/utils");
const paths = utils.findInDir(base, /\.md$/);
let generatedRoutes = [];

paths.forEach(path => {
  let fileObj = matter(fs.readFileSync(path, "utf8"));
  let routeObj = {};
  routeObj.path = path.replace(base, "").replace(".md", "");
  routeObj.name = slugs(routeObj.path);
  routeObj.meta = {};
  routeObj.meta.toc = toc(fileObj.content).json;
  routeObj.meta.title = fileObj.data.title || "Untitled";
  routeObj.meta.lang = fileObj.data.lang;
  if (routeObj.path.includes("-sp")) {
    routeObj.meta.sp = routeObj.path;
    routeObj.meta.en = routeObj.path.replace("-sp", "");
  } else {
    routeObj.meta.en = routeObj.path;
    routeObj.meta.sp = routeObj.path + "-sp";
  }
  routeObj.meta.hideScrollToTop = fileObj.data.hideScrollToTop || false;
  routeObj.meta.tocHeading = fileObj.data.tocHeading || fileObj.data.title;
  routeObj.meta.fileDownloadPath =
    fileObj.data.fileDownloadPath || `/downloads/`;
  routeObj.meta.showInSitemap = fileObj.data.showInSitemap;
  routeObj.meta.hideFromSearch = fileObj.data.hideFromSearch || false;
  routeObj.meta.updatedAt = fileObj.data.updatedAt || routeObj.meta.createdAt;
  routeObj.meta.summary = fileObj.data.summary || "";

  if (routeObj.path === "/home") {
    routeObj.path = "/";
    routeObj.url = "/";
  }

  if (!routeObj.path.includes("placeholder")) {
    generatedRoutes.push(routeObj);
  }
});

utils.saveJson(generatedRoutes, "./src/router/markdownRoutes.json");
console.log(`Created: ./src/router/markdownRoutes.json`);

const routes = require("./src/router/markdownRoutes.json");
var path = require("path");
const utils = require("./lib/utils");
const blacklist = [
  ".DS_Store",
  "placeholder.png",
  "placeholder.json",
  "placeholder.md",
];

// get a list of site pages ...
let searchIndex = routes.map((route) => {
  if (!route.meta.hideFromSearch) {
    let obj = {
      type: "page",
      path: route.path,
      name: route.name,
      title: route.meta.title,
      summary: route.meta.summary,
      headings: route.meta.toc.map((heading) => {
        let obj = {
          heading: heading.content,
          target: heading.target,
        };
        return obj;
      }),
    };
    return obj;
  }
});

// ... then get a list of site files ...
// eslint-disable-next-line no-unused-vars
utils.walkSync("./public/downloads", function (filePath, stat) {
  let obj = {
    type: "file",
    path: filePath.replace("public", ""),
    name: path.basename(filePath),
    title: this.name,
    searchMeta: "",
    summary: "",
    headers: [],
  };
  // ... push to array if filename not in blacklist ...
  if (blacklist.indexOf(obj.name) < 0) searchIndex.push(obj);
});

searchIndex = utils.filterUndefined(searchIndex);

// ... then save everything as json
utils.saveJson(searchIndex, "./public/searchIndex.json");
console.log(`Created: ./public/searchIndex.json`);

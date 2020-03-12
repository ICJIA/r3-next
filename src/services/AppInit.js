import config from "@/config.json";
import searchIndex from "../../public/searchIndex.json";

const computedPublicPath =
  process.env.NODE_ENV === `production` ? config.publicPath : "";

function getSection(key) {
  let root = key.split("/");
  const isRoot = /^.*\.(md)$/i.test(root[1]);
  if (isRoot) {
    return "/";
  } else {
    return `/${root[1]}`;
  }
}
const context = require.context("../../public/markdown", true, /\.md$/);
const siteMeta = context.keys().map(key => ({
  ...context(key),
  path: `/${key.replace(".md", "").replace("./", "")}`,
  root: `${getSection(key)}`
}));

const fundingContext = require.context(
  "../../public/markdown/funding/",
  true,
  /\.md$/
);
const fundingItems = fundingContext.keys().map(key => ({
  ...fundingContext(key),
  path: `/funding/${key.replace(".md", "").replace("./", "")}`
}));
//console.log(funding);
let funding = fundingItems.filter(item => {
  if (item.path.indexOf("placeholder") === -1) {
    return item;
  }
});

let colors = {
  blue: ["#29B6F6", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
  pink: ["#EC407A", "#D81B60", "#C2185B", "#AD1457", "#880E4F"]
};

//console.log(funding);

let myApp = {
  config,
  searchIndex,
  computedPublicPath,
  siteMeta,
  funding,
  colors
};

export { myApp };
